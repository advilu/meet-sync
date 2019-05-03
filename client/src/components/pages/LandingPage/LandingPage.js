import React, { Component } from "react";
import styles from "./LandingPage.module.css";
import axios from "axios";
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
        axios.get('http://localhost:3001/give/me/something')
        .then(response => {
            console.log(response.data)
            this.setState({
                ...this.state,
                name: response.data.message    
            })
        })
    }
    // handleSomething = (newName) => {
    //     this.setState({
    //         ...this.state,
    //         name: newName
    //     })
    // }

    render() {
        return (
            <div className={styles.welcome}>
                Welcome, {this.state.name}.
            </div>
        )
    }
}

export default LandingPage;