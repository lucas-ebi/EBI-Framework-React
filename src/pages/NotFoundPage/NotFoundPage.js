import React from 'react';
import EbiHeader from '../../components/EbiHeader/EbiHeader'; // assuming you have a corresponding EbiHeader React component
import './NotFoundPage.css'; // assuming you have converted the SCSS to CSS

const NotFoundPage = () => {
    return (
        <div id="content">
            <EbiHeader title="Not Found" />

            <section id="main-content-area" className="row padding-top-xsmall padding-bottom-xsmall" role="main">
                We didn't find the content you are looking for!
            </section>
        </div>
    );
}

export default NotFoundPage;