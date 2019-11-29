import React, { Component } from 'react';
import { sendEmail } from './UserFunctions';
import { getEmails } from './UserFunctions';

class SendEmail extends Component {
  constructor() {
    super();
    this.state = {
      toEmail: '',
      subject: '',
      message: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const newEmail = {
      toEmail: this.state.toEmail,
      subject: this.state.subject,
      message: this.state.message
    };

    sendEmail(newEmail).then(res => {
      this.props.history.push(`/send`);
    });
  }

  render() {
    //const {emails} = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Send Email</h1>

              <div className="form-group">
                <label htmlFor="toEmail">To</label>
                <input
                  type="toEmail"
                  className="form-control"
                  name="toEmail"
                  placeholder="Write email"
                  value={this.state.toEmail}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="subject"
                  className="form-control"
                  name="subject"
                  placeholder="Enter subject"
                  value={this.state.subject}
                  onChange={this.onChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <input
                  type="message"
                  className="form-control"
                  name="message"
                  placeholder="Type some message"
                  value={this.state.message}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-warning btn-block"
              >
                Send
              </button>
            </form>
            <div>
                 {/*  <table>
                <tbody>
                    <tr>
                        <th>To</th>
                        <th>Subject</th>
                        <th>Timestamp</th>
                    </tr>
                     { emails.map((email, index) => {
                            return (
                                <tr key={"cityrow" + index}>
                                    <td>{city.City}</td>
                                    <td>{city.State}</td>
                                    <td>{city.District}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table> */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Signup;
