import React from "react";
import styles from "./Survey.module.css";

function Survey(props) {
    return (
            <form className={styles.place}>
                <h4>Weekly--On a scale of 1-10:</h4>
                <ol>
                    <li>
                        How happy are you with how the week went?
                    </li>
                    <input type="radio" className={styles.input} id="week" value="1" />
                    <input type="radio" className={styles.input} id="week" value="1" />
                    <input type="radio" className={styles.input} id="week" value="1" />
                    <input type="radio" className={styles.input} id="week" value="1" />
                    <input type="radio" className={styles.input} id="week" value="1" />
                    <input type="radio" className={styles.input} id="week" value="1" />
                    <input type="radio" className={styles.input} id="week" value="1" />
                    <input type="radio" className={styles.input} id="week" value="1" />
                    <input type="radio" className={styles.input} id="week" value="1" />
                    <input type="radio" className={styles.input} id="week" value="1" />
                    <li>
                        How clear do you feel about what's expected of you?
                    </li>
                    <input type="radio" className={styles.input} id="clarity"/>
                    <li>
                        Your satisfaction level with the decision power and/or the amount of direction you recieve?
                    </li>
                    <input type="radio" className={styles.input} id="satisfaction"/>
                    <li>
                        How much you feel your work makes a difference for the team and company?
                    </li>
                    <input type="radio" className={styles.input} id="team"/>
                    <li>
                        How much you feel you're making a small step forward each week?
                    </li>
                    <input type="radio" className={styles.input} id="forward"/>
                    <li>
                        Your level of connection to the team and your inclusion in the things which you want to be included?
                    </li>
                    <input type="radio" className={styles.input} id="inclusion"/>
                </ol>

                <ol>
                    <h4>Weekly short answer:</h4>
                    <li>
                        What went particularly well this week?
                    </li>
                    <input type="text" className={styles.input} id="wentWell"/>
                    <li>
                        Last week I was proud of my accomplishment in:
                    </li>
                    <input type="text" className={styles.input} id="proud"/>
                    <li>
                        This coming week I want to complete:
                    </li>
                    <input type="text" className={styles.input} id="goals"/>
                    <li>
                        Roadblocks, concerns, and items that need input:
                    </li>
                    <input type="text" className={styles.input} id="roadblocks"/>
                    <li>
                        Personal Development skill I am working on:
                    </li>
                    <input type="text" className={styles.input} id="pdCurrent"/>
                    <li>
                        Personal Development skill update from last week:
                    </li>
                    <input type="text" className={styles.input} id="pdUpdate"/>
                    <li>
                        Something I think I did well, something I could improve, and what my manager thinks I did well or could improve:
                    </li>
                    <input type="text" className={styles.input} id="selfReview"/>
                    <li>
                        What I think my manager did well or could improve:
                    </li>
                    <input type="text" className={styles.input} id="managerFeedback"/>
                    <li>
                        What stretch question would you like to be asked?
                    </li>
                    <input type="text" className={styles.input} id="stretch"/>
                </ol>

                <ol>
                    <h4>Qarterly short answer:</h4>
                    <li>
                        What area of your work is most fun? Least fun?
                    </li>
                    <input type="text" className={styles.input} id="funView"/>
                    <li>
                        What do you wish you could do more and less of?
                    </li>
                    <input type="text" className={styles.input} id="desired"/>
                    <li>
                        How do you go about prioritizing your work?
                    </li>
                    <input type="text" className={styles.input} id="prioritizing"/>
                    <li>
                        What would you say your biggest super strength is?  What percentage of the time do you feel you use this?  How can we increase this?
                    </li>
                    <input type="text" className={styles.input} id="strength"/>
                </ol>
                <input type="submit" value="Submit" id="submitButton" className={styles.submit} />
            </form>
    )
}

export default Survey;
