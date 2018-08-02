import React from 'react';

import logo from '../assets/logo.svg';

export function Login({ githubAuthUrl }) {
    return (
        <section className="view">
          <div className="view-column-left">
            <img src={logo} alt="Curly.im logo"/>
          </div>

          <div className="view-column-right">
            <p>
              Hi,<br />
              Please login to continue
            </p>

            <a href={githubAuthUrl}>Login with GitHub</a>
          </div>
        </section>
    );
}

export default Login;
