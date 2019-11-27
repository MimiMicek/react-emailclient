import axios from 'axios';

export const signup = newUser => {
  return axios
    .post('http://localhost:8080/users/signup', {
      username: newUser.username,
      email: newUser.email,
      password: newUser.password
    })
    .then(response => {
      console.log('User is signed up');
    });
};

export const login = user => {
  return axios
    .post('http://localhost:8080/users/login', {
      username: user.username,
      password: user.password
    })
    .then(response => {
      console.log('User is logged in');
    })
  /*   .then(response => {
      localStorage.setItem('usertoken', response.data)
      return response.data
    }) */
    .catch(err => {
      console.log(err);
    });
};
