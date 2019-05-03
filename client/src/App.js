import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
//import './App.css';
import NavTabs from './components/NavTabs/NavTabs';
import LandingPage from './components/pages/LandingPage/LandingPage';
import Survey from './components/pages/Survey/Survey';
import SdrNotes from './components/pages/SdrNotes/SdrNotes';
import ManagerNotes from './components/pages/ManagerNotes/ManagerNotes';
import Archives from './components/pages/Archives/Archives';
import axios from 'axios';

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
};

//manage state
// import React, { Component } from 'react';

class FormComponent extends Component {
  constructor () {
    this.state = {
      user: undefined,
      week: '',
      clarity: '',
      satisfaction: '',
      team: '',
      forward: '',
      inclusion: '',
      wentWell: '',
      proud: '',
      goals: '',
      roadblocks: '',
      pdCurrent: '',
      pdUpdate: '',
      selfReview: '',
      managerFeedback: '',
      stretch: ''
    }
  }
  
//   changeHandler = event => {
      
//     const week = event.target.week;
//     const clarity = event.target.clarity;
//     const satisfaction = event.target.satisfaction;
//     const team = event.target.team;
//     const forward = event.target.forward;
//     const inclusion = event.target.inclusion;
//     const wentWell = event.target.wentWell;
//     const proud = event.target.proud;
//     const goals = event.target.goals;
//     const roadblocks = event.target.roadblocks;
//     const pdCurrent = event.target.pdCurrent;
//     const pdUpdate = event.target.pdUpdate;
//     const selfReview = event.target.selfReview;
//     const managerFeedback = event.target.managerFeedback;
//     const stretch = event.target.stretch;
  
//     this.setState({
//         formControls: {
//           [week]: value,
//           [clarity]: value,
//           [satisfaction]: value,
//           [team]: value,
//           [forward]: value,
//           [inclusion]: value,
//           [wentWell]: value,
//           [proud]: value,
//           [goals]: value,
//           [roadblocks]: value,
//           [pdCurrent]: value,
//           [pdUpdate]: value,
//           [selfReview]: value,
//           [managerFeedback]: value,
//           [stretch]: value
//         }
//     });
  
// }
componentDidMount() {
  axios.get('/users').then(function(res){
    res.data({user: res.data});
  })
}

handleInputChange = event => {
  // Getting the value and name of the input which triggered the change
  let value = event.target.value;
  const name = event.target.name;
  // Updating the input's state
  this.setState({
    [name]: value
  });
};

  render () {
    console.log(this.state.user);
    return (
      <form>
          <input type="email"    
                 value={this.state.email} 
                 onChange={this.changeHandler} 
          />
      </form>
    );        
  }
};

export default App;
