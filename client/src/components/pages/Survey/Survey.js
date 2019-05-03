import React, { Component } from "react";
import styles from "./Survey.module.css";
import axios from 'axios';
import SurveyQuestionNumerical from "./SurveyQuestionNumerical";
import SurveyQuestionShort from "./SurveyQuestionShort";
import Questions from "./Questions";

class Survey extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
    };

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const name = event.target.name;
        let value = event.target.value;
        // Updating the input's state
        this.setState({
            [name]: value
        });
    };

    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     if (this.state) {
    //       API.saveForm({
    //         week: this.state.week,
    //         clarity: this.state.clarity,
    //         satisfaction: this.state.satisfaction,
    //         team: this.state.team,
    //         forward: this.state.forward,
    //         inclusion: this.state.inclusion,
    //         wentWell: this.state.wentWell,
    //         proud: this.state.proud,
    //         goals: this.state.goals,
    //         roadblocks: this.state.roadblocks,
    //         pdCurrent: this.state.pdCurrent,
    //         pdUpdate: this.state.pdUpdate,
    //         selfReview: this.state.selfReview,
    //         managerFeedback: this.state.managerFeedback,
    //         stretch: this.state.stretch
    //       })
    //         .then(res => this.loadBooks())
    //         .catch(err => console.log(err));
    //     }
    //   };

      saveForm = event => {
          event.preventDefault();
          
          const data = {...this.state};
          console.log("data", data);
        axios.post("/survey", data).then(function(res) {
            console.log("got it back")
            console.log(res.data);
        });
      }
    
    

    render() {
        console.log(this.state);
        return (
            <form className={styles.place}>
                <ol>
                    <h3>On a scale of 1-10:</h3>
                     {
                         Questions.filter((element, index) => (index <= 5)).map((element, index) => {
                            return <SurveyQuestionNumerical key = {index} question = {element.question} name = {element.tag} onChange = {this.handleInputChange} />
                         })
                     }
                </ol>

                <ol>
                    <h3>Short answer:</h3>
                    {
                         Questions.filter((element, index) => (index > 5)).map((element, index) => {
                            return <SurveyQuestionShort key = {index} question = {element.question} name = {element.tag} onChange = {this.handleInputChange} />
                         })
                     }
                </ol>

                {/* <ol>
                    <h4>Qarterly short answer:</h4>
                    <li>
                        What area of your work is most fun? Least fun?
                    </li>
                    <textarea rows="10" style={{width:"65%"}} type="text" onChange={this.handleInputChange} className={styles.input} name="funView"/>
                    <li>
                        What do you wish you could do more and less of?
                    </li>
                    <textarea rows="10" style={{width:"65%"}} type="text" onChange={this.handleInputChange} className={styles.input} name="desired"/>
                    <li>
                        How do you go about prioritizing your work?
                    </li>
                    <textarea rows="10" style={{width:"65%"}} type="text" onChange={this.handleInputChange} className={styles.input} name="prioritizing"/>
                    <li>
                        What would you say your biggest super strength is?  What percentage of the time do you feel you use this?  How can we increase this?
                    </li>
                    <textarea rows="10" style={{width:"65%"}} type="text" onChange={this.handleInputChange} className={styles.input} name="strength"/>
                </ol> */}
                <input onClick={this.saveForm} type="button" value="Submit" id="submitButton" name="submitButton" className={styles.submit} />
            </form>
        )
    }
}

export default Survey;
