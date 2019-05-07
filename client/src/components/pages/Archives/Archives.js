import React from "react";
import styles from "./Archives.module.css";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

function Archives(props) {
    return (
        <div className={styles.holder}>
            <div className={styles.welcome}>
                Archives
            </div>
            <div className={styles.namesList}>
                <div className={styles.byCity}>
                    <h3>
                        Redwood City
                    </h3>
                    <Link
                            to="/griffin" className={window.location.pathname === "/griffin" ? "nav-link active" : "nav-link"}
                        >
                            Griffin
                    </Link>
                    <br />
                    <Link
                        to="/mick" className={window.location.pathname === "/mick" ? "nav-link active" : "nav-link"}
                    >
                        Mick
                    </Link>
                    <br />
                    <Link
                        to="/joe" className={window.location.pathname === "/joe" ? "nav-link active" : "nav-link"}
                    >
                        Joe
                    </Link>
                    <br />
                    <Link
                        to="/evan" className={window.location.pathname === "/evan" ? "nav-link active" : "nav-link"}
                    >
                        Evan
                    </Link>
                    <br />
                </div>
                <div className={styles.byCity}>
                    <h3>
                        Inbound
                    </h3>
                    <Link
                        to="/ej" className={window.location.pathname === "/ej" ? "nav-link active" : "nav-link"}
                    >
                        EJ
                    </Link>
                    <br />
                    <Link
                        to="/peter" className={window.location.pathname === "/peter" ? "nav-link active" : "nav-link"}
                    >
                        Peter
                    </Link>
                    <br />
                </div>
                <div className={styles.byCity}>
                    <h3>
                        New York City
                </h3>
                    <Link
                            to="/maryam" className={window.location.pathname === "/maryam" ? "nav-link active" : "nav-link"}
                        >
                            Maryam
                    </Link>
                    <br />
                    <Link
                        to="/justin" className={window.location.pathname === "/justin" ? "nav-link active" : "nav-link"}
                    >
                        Justin
                    </Link>
                    <br />
                    <Link
                        to="/sara" className={window.location.pathname === "/sara" ? "nav-link active" : "nav-link"}
                    >
                        Sara
                    </Link>
                    <br />
                    <Link
                        to="/sydney" className={window.location.pathname === "/sydney" ? "nav-link active" : "nav-link"}
                    >
                        Sydney
                    </Link>
                    <br />
                </div>
                <div className={styles.byCity}>
                    <h3>
                        Chicago
                </h3>
                    <Link
                            to="/candace" className={window.location.pathname === "/candace" ? "nav-link active" : "nav-link"}
                        >
                            Candace
                    </Link>
                    <br />
                    <Link
                        to="/dalton" className={window.location.pathname === "/dalton" ? "nav-link active" : "nav-link"}
                    >
                        Dalton
                    </Link>
                    <br />
                    <Link
                        to="/brandon" className={window.location.pathname === "/brandon" ? "nav-link active" : "nav-link"}
                    >
                        Brandon
                    </Link>
                    <br />
                </div>
                <div className={styles.byCity}>
                    <h3>
                        Berlin
                </h3>
                    <Link
                        to="/elena" className={window.location.pathname === "/elena" ? "nav-link active" : "nav-link"}
                    >
                        Elena
                    </Link>
                    <br />
                    <Link
                            to="/gautier" className={window.location.pathname === "/gautier" ? "nav-link active" : "nav-link"}
                        >
                            Gautier
                    </Link>
                    <br />
                    <Link
                        to="/rodrigo" className={window.location.pathname === "/rodrigo" ? "nav-link active" : "nav-link"}
                    >
                        Rodrigo
                    </Link>
                    <br />
                    <Link
                        to="/marc" className={window.location.pathname === "/marc" ? "nav-link active" : "nav-link"}
                    >
                        Marc
                    </Link>
                    <br />
                </div>
            </div>
        </div>
    )
}

export default Archives;