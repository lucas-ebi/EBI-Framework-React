import React from 'react';
import './DashboardPage.css'; // assuming you have converted the SCSS to CSS

const DashboardPage = () => {
    return (
        <div id="content">
            <EbiHeader title="Dashboard" />

            <section id="main-content-area" className="row padding-top-xsmall padding-bottom-xsmall" role="main">
                Dashboard Page
            </section>
        </div>
    );
}

export default DashboardPage;