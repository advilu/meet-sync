import React from "react";
import styles from "./ManagerNotes.module.css";


function ManagerNotes(props) {
    return(
        <div>
            <div className={styles.welcome}>
                Manager Notes
            </div>
            <div className={styles.notes}>
                Taking notes, checking them twice.
            </div>
        </div>
    )
}

export default ManagerNotes;