import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
//import './App.css';
import NavTabs from './components/NavTabs';
import landingPage from './components/pages/landing-page';
import sdrNotes from './components/pages/sdr-notes';
import ManagerNotes from './components/pages/ManagerNotes/ManagerNotes';
import Archives from './components/pages/Archives';

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={landingPage} />
        <Route exact path="/sdr-notes" component={sdrNotes} />
        <Route exact path="/manager-notes" component={ManagerNotes} />
        <Route exact path="/archives" component={Archives} />
      </div>
    </Router>
  );
}

export default App;
