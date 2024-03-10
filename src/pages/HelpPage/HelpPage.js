import React from 'react';
import EbiHeader from '../../components/EbiHeader/EbiHeader'; // assuming you have a corresponding EbiHeader React component
import './HelpPage.css'; // assuming you have converted the SCSS to CSS

const HelpPage = () => {
    return (
        <div id="content">
            <EbiHeader title="About & Help" />

            <section id="main-content-area" className="row padding-top-xsmall padding-bottom-xsmall" role="main">
                About & Help Page
            </section>
        </div>
    );
}

export default HelpPage;