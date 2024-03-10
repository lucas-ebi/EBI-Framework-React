import React from 'react';
import EbiHeader from '../../components/EbiHeader/EbiHeader'; // assuming you have a corresponding EbiHeader React component
import './HomePage.css'; // assuming you have converted the SCSS to CSS

const HomePage = () => {
    const headerMainMenu = [
        {"title": "Data", "href": "data"},
        {"title": "Project", "href": "project"},
        {"title": "Team", "href": "team"},
        {"title": "Overview", "href": "overview"},
        {"title": "Submit", "href": "submit"},
    ];

    return (
        <div id="content">
            <EbiHeader title="Home" menu={headerMainMenu} />

            <section id="main-content-area" className="row padding-top-small padding-bottom-xsmall" role="main">
                <div className="columns">
                    <h2>Hello world</h2>
                    <p>This is the default home page component.</p>
                </div>
            </section>
        </div>
    );
}

export default HomePage;