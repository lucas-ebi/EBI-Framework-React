import React from 'react';
import EbiHeader from '../../components/EbiHeader/EbiHeader'; // Assuming EbiHeader is a valid React component

const UserLoginPage = () => {
  return (
    <div id="content">
      <EbiHeader title="User Login" />

      <section id="main-content-area" className="row padding-top-xsmall padding-bottom-xsmall" role="main">
        <h2 className="padding-top-xlarge text-center">Log in with you email account</h2>

        <form className="login-form">
          <label>Email
            <input type="email" placeholder="Somebody@example.com"/>
          </label>

          <label>Password
            <input type="password" placeholder="Password"/>
          </label>

          <p>
            <input type="submit" className="button expanded" value="Log in"/>
          </p>

          <p className="text-center"><a href="#">Forgot your password?</a></p>
        </form>
      </section>
    </div>
  );
}

export default UserLoginPage;