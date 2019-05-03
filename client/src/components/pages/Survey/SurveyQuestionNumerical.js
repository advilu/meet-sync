import React from "react";
import styles from "./Survey.module.css";

const SurveyQuestionNumerical = (props) => {
    return (
        <div>
            <br />
            <li>
                {props.question}
            </li>
            <select type="text" 
            onChange={props.onChange} className={styles.options} name={props.name}>
            <option value="Options">Options</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            </select>
        </div>
    )
}

export default SurveyQuestionNumerical;