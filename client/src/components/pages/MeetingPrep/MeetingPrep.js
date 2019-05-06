import React from "react";
import styles from "./MeetingPrep.module.css";
import { Link } from "react-router-dom";


function MeetingPrep(props) {
    return(
        <div className={styles.sdrForm}>
            SDR form.
            Fill out your form.
            <Link
                        to="/archived-manager-meetings" className={window.location.pathname === "/manager-form" ? "nav-link active" : "nav-link"}
                    >
                        View your archived meetings.
            </Link>
        </div>
    )
}

export default MeetingPrep;