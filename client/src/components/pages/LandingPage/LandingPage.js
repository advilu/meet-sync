import React, { Component } from "react";
import styles from "./LandingPage.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateSeries from '../CreateSeries/CreateSeries';
// import MeetingPrep from '../MeetingPrep/MeetingPrep';
import ArchivedManagerMeetings from '../ArchivedManagerMeetings/ArchivedManagerMeetings';
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
                <br />
                <Link
                        to="/archived-manager-meetings" className={window.location.pathname === "/archived-meetings" ? "nav-link active" : "nav-link"}
                    >
                        View your archived meetings.
                </Link>
                </div>
            </div>
        )
    }
}

export default LandingPage;