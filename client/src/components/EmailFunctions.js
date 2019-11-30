import axios from 'axios';

export const sendEmail = newEmail => {
  return axios
    .post('http://localhost:8080/emails/send-email', {
      to: newEmail.to,
      subject: newEmail.subject,
      html: newEmail.html
    })
    .then(response => {
      console.log('Email has been sent!');
    });

/* export const getEmails = email => {
  return axios
    .get('http://localhost:8080/emails', {
      to: email.to, //email or emails CHECK
      subject: email.subject,
      html: email.html
    })
    .then(response => {
      console.log('Emails have been listed');
    })
    .catch(err => {
      console.log(err);
    }); */

    /* 
    //check the components > FOAAS.js example in 5_Auth
    or this
      componentDidMount() {
        fetch("https://indian-cities-api-nocbegfhqg.now.sh/cities")
            .then(response => response.json())
            .then(cities => this.setState({cities}));
    }*/

};
 