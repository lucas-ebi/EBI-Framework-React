import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom'; // Import the BrowserRouter component
import './App.css';
import AppRouter from './AppRouter'; // Import the AppRouter component

function App() {
  return (
    <Router>
      <div>
        <header id="masthead-black-bar" className="clearfix masthead-black-bar">
            <nav className="row">
              <ul id="global-nav" className="menu">
                <li className="home-mobile"><a href="//www.ebi.ac.uk"></a></li>
                <li className="home active"><a href="//www.ebi.ac.uk">EMBL-EBI</a></li>
                <li className="services"><a href="//www.ebi.ac.uk/services">Services</a></li>
                <li className="research"><a href="//www.ebi.ac.uk/research">Research</a></li>
                <li className="training"><a href="//www.ebi.ac.uk/training">Training</a></li>
                <li className="about"><a href="//www.ebi.ac.uk/about">About us</a></li>
                <li className="search">
                  <button data-toggle="search-global-dropdown">Search</button>
                  <div id="search-global-dropdown" className="dropdown-pane" data-dropdown data-options="closeOnClick:true;">
                  </div>
                </li>
                <li className="float-right show-for-medium embl-selector">
                  <button className="button float-right" type="button" data-toggle="embl-dropdown">Hinxton</button>
                </li>
              </ul>
            </nav>
          </header>
          <AppRouter />
        </div>
      </Router>
  );
}

export default App;