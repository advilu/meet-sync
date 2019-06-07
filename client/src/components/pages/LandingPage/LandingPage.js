import React, { Component } from "react";
import styles from "./LandingPage.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateSeries from '../CreateSeries/CreateSeries';
// import MeetingPrep from '../MeetingPrep/MeetingPrep';
import Archives from '../Archives/Archives';
// import Card from "../../Card"

// const Div = styled.div`
//     background-color: red;
//     color: white;
// `

class LandingPage extends Component {
    state = {
        name: ""
    };
    componentDidMount() {
        axios.get('/users')
            .then(response => {
                // console.log(response.data)
                this.setState({
                    ...this.state,
                    name: response.data.name
                })
            })
    };
    // handleSomething = (newName) => {
    //     this.setState({
    //         ...this.state,
    //         name: newName
    //     })
    // }

    render() {
        return (
            <div className={styles.page}>
                <div className={styles.welcome}>
                    Welcome, {this.state.name}.
                </div>
                <div className={styles.links}>
                <Link
                        to="/create-series" className={window.location.pathname === "/create-series" ? "nav-link active" : "nav-link"}
                    >
                        Create a new 1:1 series.
                </Link>
                <hr />
                <Link
                        to="/archives" className={window.location.pathname === "/archives" ? "nav-link active" : "nav-link"}
                    >
                        View your archived meetings.
                </Link>
                <hr />
                <div className={styles.roster}>
                    <h3>
                    Griffin
                    </h3>
                    Standing: Good <br />
                    Morale: Fully Engaged <br />
                    Career Path: Sales <br />
                    Quota Status: 76-99% <br />
                    On the Board/Quota: 13/17 <br />
                </div>
                <div className={styles.roster}>
                    <h3>
                    Mick
                    </h3>
                    Standing: Good <br />
                    Morale: Fully Engaged <br />
                    Career Path: Sales <br />
                    Quota Status: 76-99% <br />
                    On the Board/Quota: 14/17 <br />
                </div>
                <div className={styles.roster}>
                    <h3>
                    Joe
                    </h3>
                    Standing: Good <br />
                    Morale: Fully Engaged <br />
                    Career Path: BD <br />
                    Quota Status: 76-99% <br />
                    On the Board/Quota: 13/17 <br />
                </div>
                <div className={styles.roster}>
                    <h3>
                    Evan
                    </h3>
                    Standing: Good <br />
                    Morale: Fully Engaged <br />
                    Career Path: Unsure <br />
                    Quota Status: Not on Quota <br />
                    On the Board/Quota: 2/7 <br />
                </div>
                </div>
                <div className={styles.picture}>
                    {/* <img src="https://www.123organize.com/wp-content/uploads/2017/03/google-calendar-schedule-640x456.jpg" alt="calendar"/> */}

                    
                </div>
            </div>
        )
    }
}

export default LandingPage;