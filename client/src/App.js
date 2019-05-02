import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
//import './App.css';
import NavTabs from './components/NavTabs/NavTabs';
import LandingPage from './components/pages/LandingPage/LandingPage';
import Survey from './components/pages/Survey/Survey';
import SdrNotes from './components/pages/SdrNotes/SdrNotes';
import ManagerNotes from './components/pages/ManagerNotes/ManagerNotes';
import Archives from './components/pages/Archives/Archives';

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/survey" component={Survey} />
        <Route exact path="/sdr-notes" component={SdrNotes} />
        <Route exact path="/manager-notes" component={ManagerNotes} />
        <Route exact path="/archives" component={Archives} />
      </div>
    </Router>
  );
}

export default App;
