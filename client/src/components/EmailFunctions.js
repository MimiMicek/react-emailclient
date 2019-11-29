/* import axios from 'axios';

export const sendEmail = newEmail => {
  return axios
    .post('http://localhost:8080/users/sendemail', {
      toEmail: newEmail.toEmail,
      subject: newEmail.subject,
      message: newEmail.message
    })
    .then(response => {
      console.log('Email has been sent!');
    });
};


//this one gets all the sent emails from the database and renders them
//maybe put in a separate file
export const getEmails = user => {
  return axios
    .get('http://localhost:8080/users/sendemail', {
      toEmail: user.emails.toEmail,
      subject: user.emails.subject,
      //message: user.emails.message => might not needed just to show sent emails
    })
    .then(response => {
      console.log('Emails have been listed');
    })
    .catch(err => {
      console.log(err);
    });
    //check the components > FOAAS.js example in 5_Auth
    or this
      componentDidMount() {
        fetch("https://indian-cities-api-nocbegfhqg.now.sh/cities")
            .then(response => response.json())
            .then(cities => this.setState({cities}));
    }

};
 */