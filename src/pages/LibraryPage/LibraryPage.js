import React from 'react';
import EbiHeader from '../../components/EbiHeader/EbiHeader'; // assuming you have a corresponding EbiHeader React component
import './LibraryPage.css'; // assuming you have converted the SCSS to CSS

const LibraryPage = () => {
    return (
        <div id="content">
            <EbiHeader title="Library" />

            <section id="main-content-area" className="row padding-top-xsmall padding-bottom-xsmall" role="main">
                Library Page
            </section>
        </div>
    );
}

export default LibraryPage;