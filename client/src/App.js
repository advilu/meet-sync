import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
//import './App.css';
import NavTabs from './components/NavTabs';
import landingPage from './components/pages/landing-page';
import sdrNotes from './components/pages/sdr-notes';
import managerNotes from './components/pages/manager-notes';
import archives from './components/pages/archives';

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={landingPage} />
        <Route exact path="/sdrNotes" component={sdrNotes} />
        <Route exact path="managerNotes" component={managerNotes} />
        <Route exact path="archives" component={archives} />
      </div>
    </Router>
  );
}

export default App;
