import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
        <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
                <Link to="/login" className="nav-link">
                    Login
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/signup" className="nav-link">
                    Signup
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/sendemail" className="nav-link">
                    Send email
                </Link>
            </li>
        </ul>        
      </nav>
    )
  }
}

export default Navbar
