import React from 'react';
import './EbiFooter.css'; // assuming you have converted the SCSS to CSS

const EbiFooter = () => {
    return (
        <footer>
            <div id="global-footer" className="global-footer">
                <nav id="global-nav-expanded" className="global-nav-expanded row">
                    <div className="columns small-6 medium-2 "><a href="//www.ebi.ac.uk" title="EMBL-EBI"><span className="ebi-logo"></span></a></div>
                    <div className="columns small-6 medium-2">
                        <h5 className="services"><a className="services-color" href="//www.ebi.ac.uk/services">Services</a></h5>
                        <ul>
                            <li className="first"><a href="//www.ebi.ac.uk/services">By topic</a></li>
                            <li><a href="//www.ebi.ac.uk/services/all">By name (A-Z)</a></li>
                            <li className="last"><a href="//www.ebi.ac.uk/support">Help & Support</a></li>
                        </ul>
                    </div>
                    <div className="columns small-6 medium-2">
                        <h5 className="research"><a className="research-color" href="//www.ebi.ac.uk/research">Research</a></h5>
                        <ul>
                            <li><a href="//www.ebi.ac.uk/research/publications">Publications</a></li>
                            <li><a href="//www.ebi.ac.uk/research/groups">Research groups</a></li>
                            <li className="last"><a href="//www.ebi.ac.uk/research/postdocs">Postdocs</a> & <a href="//www.ebi.ac.uk/research/eipp">PhDs</a></li>
                        </ul>
                    </div>
                    <div className="columns small-6 medium-2">
                        <h5 className="training"><a className="training-color" href="//www.ebi.ac.uk/training">Training</a></h5>
                        <ul>
                            <li><a href="//www.ebi.ac.uk/training/handson">Train at EBI</a></li>
                            <li><a href="//www.ebi.ac.uk/training/roadshow">Train outside EBI</a></li>
                            <li><a href="//www.ebi.ac.uk/training/online">Train online</a></li>
                            <li className="last"><a href="//www.ebi.ac.uk/training/contact-us">Contact organisers</a></li>
                        </ul>
                    </div>
                    <div className="columns small-6 medium-2">
                        <h5 className="industry"><a className="industry-color" href="//www.ebi.ac.uk/industry">Industry</a></h5>
                        <ul>
                            <li><a href="//www.ebi.ac.uk/industry/private">Members Area</a></li>
                            <li><a href="//www.ebi.ac.uk/industry/workshops">Workshops</a></li>
                            <li><a href="//www.ebi.ac.uk/industry/sme-forum"><abbr title="Small Medium Enterprise">SME</abbr> Forum</a></li>
                            <li className="last"><a href="//www.ebi.ac.uk/industry/contact">Contact Industry programme</a></li>
                        </ul>
                    </div>
                    <div className="columns small-6 medium-2">
                        <h5 className="about"><a className="ebi-color" href="//www.ebi.ac.uk/about">About EMBL-EBI</a></h5>
                        <ul>
                            <li><a href="//www.ebi.ac.uk/about/contact">Contact us</a></li>
                            <li><a href="//www.ebi.ac.uk/about/events">Events</a></li>
                            <li><a href="//www.ebi.ac.uk/about/jobs" title="Jobs, postdocs, PhDs...">Jobs</a></li>
                            <li className="first"><a href="//www.ebi.ac.uk/about/news">News</a></li>
                            <li><a href="//www.ebi.ac.uk/about/people">People & groups</a></li>
                        </ul>
                    </div>
                </nav>
                <section id="ebi-footer-meta" className="ebi-footer-meta row">
                    <div className="columns">
                        <p className="address">EMBL-EBI, Wellcome Genome Campus, Hinxton, Cambridgeshire, CB10 1SD, UK. +44 (0)1223 49 44 44</p>
                        <p className="legal">Copyright © EMBL-EBI 2017 | EMBL-EBI is part of the European Molecular Biology Laboratory | <a href="//www.ebi.ac.uk/about/terms-of-use">Terms of use</a>
                            <a className="readmore float-right" href="http://intranet.ebi.ac.uk">
                            <span className="icon icon-functional" data-icon="L"></span> Intranet for staff
                            </a>
                        </p>
                    </div>
                </section>
            </div>
        </footer>
    );
}

export default EbiFooter;