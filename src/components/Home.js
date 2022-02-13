import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Exam App - Home</title>
        </Helmet>
        <div id="home">
          <section>
            <div style={{ textAlign: 'center' }}>
              <span class="mdi mdi-cube-outline cube"></span>
            </div>
            <h1>Exam App</h1>
            <div className="play-button-container">
              <ul>
                <li>
                  <Link className="play-button" to="/play/instructions">
                    Start
                  </Link>
                </li>
              </ul>
            </div>
            <div className="auth-container">
              <Link to="/login" className="auth-buttons" id="login-button">
                Login
              </Link>
              <Link to="/register" className="auth-buttons" id="signup-button">
                Sign Up
              </Link>
            </div>
          </section>
        </div>
      </Fragment>
    );
  }
}
export default Home;
