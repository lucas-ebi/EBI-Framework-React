import React from 'react';
import EbiHeader from '../../components/EbiHeader/EbiHeader'; // Assuming EbiHeader is a valid React component

const UserLogoutPage = () => {
  return (
    <div id="content">
      <EbiHeader title="Logout" />

      <section id="main-content-area" className="row padding-top-xsmall padding-bottom-xsmall" role="main">
        Logout Page
      </section>
    </div>
  );
}

export default UserLogoutPage;