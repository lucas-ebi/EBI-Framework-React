import React from 'react';
import './EbiNavbar.css'; // assuming you have converted the SCSS to CSS

const EbiNavbar = () => {
    return (
        <header id="masthead-black-bar" className="clearfix masthead-black-bar">
            <nav className="row">
                <ul id="global-nav" className="menu">
                    <li className="home-mobile">
                        <a href="//www.ebi.ac.uk"></a>
                    </li>
                    <li className="home active"><a href="//www.ebi.ac.uk">EMBL-EBI</a></li>
                    <li className="services"><a href="//www.ebi.ac.uk/services">Services</a></li>
                    <li className="research"><a href="//www.ebi.ac.uk/research">Research</a></li>
                    <li className="training"><a href="//www.ebi.ac.uk/training">Training</a></li>
                    <li className="about"><a href="//www.ebi.ac.uk/about">About us</a></li>
                    <li className="search">
                        <a href="#" data-toggle="search-global-dropdown" aria-controls="search-global-dropdown" data-is-focus="false" data-yeti-box="search-global-dropdown" aria-haspopup="true" aria-expanded="false"><span className="show-for-small-only">Search</span></a>
                        <div id="search-global-dropdown" className="dropdown-pane" data-dropdown="ckuqvw-dropdown" data-options="closeOnClick:true;" aria-hidden="true" data-yeti-box="search-global-dropdown" data-resize="search-global-dropdown" aria-labelledby="bx1ljp-dd-anchor">
                            <form id="global-search" name="global-search" action="/ebisearch/search.ebi" method="GET" className="large-8 large-push-2">
                                <fieldset>
                                    <div className="input-group">
                                        <input type="text" name="query" id="global-searchbox" className="input-group-field" placeholder="Search all of EMBL-EBI" />
                                        <div className="input-group-button">
                                            <input type="submit" name="submit" value="Search" className="button" />
                                            <input type="hidden" name="db" value="allebi" checked="checked" />
                                            <input type="hidden" name="requestFrom" value="masthead-black-bar" checked="checked" />
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </li>
                    <li className="float-right show-for-medium embl-selector">
                        <button className="button float-right" type="button" data-toggle="embl-dropdown" aria-controls="embl-dropdown" data-is-focus="false" data-yeti-box="embl-dropdown" aria-haspopup="true" aria-expanded="false">Hinxton</button>
                    </li>
                </ul>
            </nav>
            <div>
                <div id="embl-dropdown" className="embl-dropdown dropdown-pane bottom">
                    <p>EMBL-EBI in Hinxton, Cambridge is one of <br />six EMBL locations across europe.<br /> <a href="//www.ebi.ac.uk/about" className="small readmore">More about EMBL-EBI</a></p>
                    <h6>Connect to another EMBL location</h6>
                    <div className="small-collapse padding-bottom-large clearfix">
                        <div className="columns small-5 padding-bottom-medium">
                            <a href="http://www.embl.de/">Heidelberg</a>
                            <div className="small">Main laboratory</div>
                        </div>
                        <div className="columns small-7 padding-bottom-medium">
                            <a href="http://www.embl-barcelona.es/">Barcelona</a>
                            <div className="small">Tissue biology and disease modelling</div>
                        </div>
                        <div className="columns small-5 padding-bottom-medium">
                            <a href="http://www.embl.fr/">Grenoble</a>
                            <div className="small">Structural biology</div>
                        </div>
                        <div className="columns small-7 padding-bottom-medium">
                            <a href="http://www.embl-hamburg.de/">Hamburg</a>
                            <div className="small">Structural biology</div>
                        </div>
                        <div className="columns small-5 padding-bottom-medium">
                            <a href="http://www.embl.it/">Rome</a>
                            <div className="small">Epigenetics and neurobiology</div>
                        </div>
                        <div className="columns small-7 padding-bottom-medium"><a href="http://embl.org/" className="readmore">More about EMBL</a></div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default EbiNavbar;