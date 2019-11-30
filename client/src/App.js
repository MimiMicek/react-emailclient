import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import SendEmail from './components/SendEmail';



class App extends Component {
  state = {
      data: null
    };

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
  callBackendAPI = async () => {
    const response = await fetch('/backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message); 
    }
    return body;
  };

  render() {
    return (
      <Router>
        <div className="App">
          {console.log(this.state.data)}
          <Navbar />
          <div className="container">
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/send-email" component={SendEmail} />
          </div>
        </div>
        </Router>
    );      
  }
}

export default App;