import React from "react";
import { Link } from "react-router-dom";

function NavTabs() {
    return (
        <ul>
            <li>
                <a href="http://localhost:3001/auth/google">Login</a>
            </li>
            <li>
                <Link 
                to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                >
                Home
                </Link>
            </li>
            <li>
                <Link 
                to="/sdr-notes" 
                className={window.location.pathname === "/sdr-notes" ? "nav-link active" : "nav-link"}
                >
                SDR Notes
                </Link>
            </li>
            <li>
                <Link 
                to="/manager-notes" 
                className={window.location.pathname === "/manager-notes" ? "nav-link active" : "nav-link"}
                >
                Manager Notes
                </Link>
            </li>
            <li>
                <Link 
                to="/archives" 
                className={window.location.pathname === "/archives" ? "nav-link active" : "nav-link"}
                >
                Archives
                </Link>
            </li>
        </ul>
    )
}

export default NavTabs;