import React, { Component } from 'react';
import { sendEmail } from './EmailFunctions';
import ReactTable from 'react-table'
import 'react-table/react-table.css'

class SendEmail extends Component {
  constructor() {
    super();
    this.state = {
      to: '',
      subject: '',
      html: '',
      emails: [],
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
      to: this.state.to,
      subject: this.state.subject,
      html: this.state.html
    };

    sendEmail(newEmail).then(res => {
      this.props.history.push(`/send-email`);
    });
  }

  componentDidMount() {
    fetch("http://localhost:8080/emails")
        .then(response => response.json())
        .then(emails => this.setState({emails}));
  }

  render() {
    const {emails} = this.state;
    console.log(emails);

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Send Email</h1>

              <div className="form-group">
                <label htmlFor="to">To</label>
                <input
                  type="to"
                  className="form-control"
                  name="to"
                  placeholder="Write email"
                  value={this.state.to}
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
                <label htmlFor="html">Message</label>
                <input
                  type="html"
                  className="form-control"
                  name="html"
                  placeholder="Type some message"
                  value={this.state.html}
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
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            {/*    <table>
                    <tbody>
                        <tr>
                            <th>To</th>
                            <th>Subject</th>
                            <th>Message</th>
                        </tr>
                        { emails.map((email, index) => {
                            return (
                              <tr key={"emailrow" + index}>
                                  <td>{email.to}</td>
                                  <td>{email.subject}</td>
                                  <td>{email.html}</td>
                              </tr>
                            )
                        })}
                    </tbody>
                  </table> */}
              <ReactTable 
                    columns={[
                        {
                            Header: "To",
                            accessor: "to"
                        },
                        {
                            Header: "subject",
                            accessor: "subject"
                        },
                        {
                            Header: "Message",
                            accessor: "html"
                        }
                    ]}
                    data={this.state.emails}
                />
            </div>
        </div>
      </div>
    )
  }
}

export default SendEmail;
