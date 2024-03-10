import React from 'react';
import { Link } from 'react-router-dom';
import EbiHeader from '../../../components/EbiHeader/EbiHeader'; // Assuming EbiHeader is a valid React component

const OverviewPage = () => {
  const tabLinks = [
    {"title": "Data", "href": "/submission/data"},
    {"title": "Project", "href": "/submission/project"},
    {"title": "Team", "href": "/submission/team"},
    {"title": "Overview", "href": "/submission/overview"},
    {"title": "Submit", "href": "/submission/submit"},
  ];

  return (
    <div id="content">
      <EbiHeader title="New Submission" />

      <section id="main-content-area" className="row padding-top-xsmall padding-bottom-xsmall" role="main">
        <h2 className="padding-top-xlarge">New data submission</h2>

        <ul className="tabs" id="example-tabs">
          {tabLinks.map((link, index) => (
            <li key={index} className="tabs-title">
              <Link to={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>
        
        Overview page
      </section>
    </div>
  );
}

export default OverviewPage;