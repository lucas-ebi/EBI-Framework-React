import React from 'react';
import { Link } from 'react-router-dom';
import './EbiHeader.css'; // assuming you have converted the SCSS to CSS

const EbiHeader = ({ title, href = "/", image = "https://www.ebi.ac.uk/web_guidelines/images/banners/EBI_SERVICES_Banner_2016.jpg", color = "#091316", links = [
    {"title": "New submission", "href": "/submission"},
    {"title": "Your dashboard", "href": "/dashboard"},
    {"title": "Your library", "href": "/library"},
    {"title": "About & help", "href": "/help"},
] }) => {
    return (
        <div data-sticky-container="" className="sticky-container">
            <header id="masthead" className="masthead sticky is-anchored is-at-top" style={{background: `url(${image}) no-repeat 50% 0 ${color}`}}>
                <div className="masthead-inner row">
                    <div className="columns medium-12" id="local-title">
                        <h1><Link to={href} title={title}>{title}</Link></h1>
                    </div>
                    <nav>
                        <ul id="local-nav" className="dropdown menu float-left" data-description="navigational">
                            {links.map((link, index) => (
                                <li key={index}>
                                    <Link to={link.href}>{link.title}</Link>
                                </li>
                            ))}
                        </ul>
                        <ul id="secondary-menu-user-links" className="float-right menu">
                            <li className="disable"><Link to="/user">Hi Mae</Link></li>
                            <li className="menu"><Link to="/dashboard">My dashboard</Link></li>
                            <li><Link to="/user/login">Login</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
}

export default EbiHeader;