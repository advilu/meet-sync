import React from "react"
import styles from "./NavSurvey.module.css"

export default (props) => (
    <li className={styles.topnav}>
        {props.children}
    </li>
)