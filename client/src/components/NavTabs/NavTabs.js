import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavTabs.module.css";
import Home from "./Home/Home";
import NavLogin from "./NavLogin/NavLogin";
import NavSurvey from "./NavSurvey/NavSurvey";
import ManagerNotes from "./ManagerNotes/ManagerNotes";
import SdrNotes from "./SdrNotes/SdrNotes";
import Archives from "./Archives/Archives";

function NavTabs() {
    return (
            <ul className={styles.ul}>
                <Home>
                    <Link
                        to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                    >
                        Home
                    </Link>
                </Home>
                <NavLogin>
                    <a href="http://localhost:3001/auth/google" className={styles.topnav}>Login</a>
                </NavLogin>
                <NavSurvey>
                    <Link
                        to="/survey" 
                        className={window.location.pathname === "/survey" ? "nav-link active" : "nav-link"}
                    >
                        Survey
                </Link>
                </NavSurvey>
                <SdrNotes>
                    <Link
                        to="/sdr-notes"
                        className={window.location.pathname === "/sdr-notes" ? "nav-link active" : "nav-link"}
                    >
                        SDR Notes
                </Link>
                </SdrNotes>
                <ManagerNotes>
                    <Link
                        to="/manager-notes"
                        className={window.location.pathname === "/manager-notes" ? "nav-link active" : "nav-link"}
                    >
                        Manager Notes
                </Link>
                </ManagerNotes>
                <Archives>
                    <Link
                        to="/archives"
                        className={window.location.pathname === "/archives" ? "nav-link active" : "nav-link"}
                    >
                        Archives
                </Link>
                </Archives>
            </ul>
    )
}

export default NavTabs;