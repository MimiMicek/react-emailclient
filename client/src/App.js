import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';


class App extends Component {
  state = {
      data: null
    };

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
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
          </div>
        </div>
        </Router>
    );      
  }
}

export default App;