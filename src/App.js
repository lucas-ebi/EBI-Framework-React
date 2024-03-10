import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom'; // Import the BrowserRouter component
import './App.css';
import EbiNavbar from './components/EbiNavbar/EbiNavbar';
import AppRouter from './AppRouter'; // Import the AppRouter component
import EbiFooter from './components/EbiFooter/EbiFooter';

function App() {
  return (
    <Router>
      <div>
        <EbiNavbar />
        <AppRouter />
        <EbiFooter />
      </div>
    </Router>
  );
}

export default App;