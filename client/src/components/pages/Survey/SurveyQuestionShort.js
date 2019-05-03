import React from "react";
import styles from "./Survey.module.css";

const SurveyQuestionShort = (props) => {
    return (
        <div>
            <li>
                {props.question}
            </li>
            <textarea rows="10" style= {{ width: "65%" }} type="text"
            onChange={props.onChange} className={styles.input} name={props.name} />
        </div>
    )
}

export default SurveyQuestionShort;