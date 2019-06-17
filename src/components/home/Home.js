import React, { Component } from 'react';
import { Link } from '@reach/router';

class Home extends Component {
  render() {
    const { user } = this.props;

    const biggerLead = {
      fontSize: 1.4 + 'em',
      fontWeight: 200
    };

    return (
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-10 col-md-10 col-lg-8 col-xl-7">
            <div
              className="display-4 text-primary mt-3 mb-2"
              style={{
                fontSize: 2.8 + 'em'
              }}
            >
              Education Success
            </div>
            <p className="lead" style={biggerLead}>
             Education Success (EduSucx 1.0) app helps students to succeed in their academics. 
             By creating study group, sharing educational resources, and conducting tutorials. Students help each other to succeed.  
             <a href="https://www.oercommons.org/" target="_blank">Learn more</a>{' '}
              with <a href="https://www.facebook.com/daniel.agbaji" target="_blank">Facebook</a>.
            </p>

            {user == null && (
              <span>
                <Link
                  to="/register"
                  className="btn btn-outline-primary mr-2"
                >
                  Register
                </Link>
                <Link
                  to="/login"
                  className="btn btn-outline-primary mr-2"
                >
                  Log In
                </Link>
              </span>
            )}
            {user && (
              <Link to="/meetings" className="btn btn-primary">
                Study
              </Link>
            )}
          </div>{' '}
          {/* columns */}
        </div>
      </div>
    );
  }
}

export default Home;
