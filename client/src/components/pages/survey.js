import React from "react";

function Survey(props) {
    return (
        <div>
            <h4>Weekly--On a scale of 1-10:</h4>
            <ol>
                <li>
                    How happy are you with how the week went?
    </li>
                <li>
                    How do you go about prioritizing your work?
    </li>
                <li>
                    How clear do you feel about what's expected of you?
    </li>
                <li>
                    Your satisfaction level with the decision power and/or the amount of direction you recieve?
    </li>
                <li>
                    How much you feel your work makes a difference for the team and company?
    </li>
                <li>
                    How much you feel you're making a small step forward each week?
    </li>
                <li>
                    Your feeling of connection to the team and your inclusion in the things which you want to be included?
    </li>
            </ol>

            <ol>
                <h4>Weekly short answer:</h4>
                <li>
                    What went particularly well this week?
    </li>
                <li>
                    Last week I was proud of my accomplishment in:
    </li>
                <li>
                    This coming week I want to complete:
    </li>
                <li>
                    Roadblocks, concerns, and items that need input:
    </li>
                <li>
                    Personal Development skill I am working on:
    </li>
                <li>
                    Personal Development skill update from last week:
    </li>
                <li>
                    Something I think I did well, something I could have done better, what my manager thinks I did well or could improve:
    </li>
                <li>
                    What I think my manager did well or could improve:
    </li>
                <li>
                    What stretch question would you like to be asked?
    </li>
            </ol>

            <ol>
                <h4>Qarterly short answer:</h4>
                <li>
                    What area of your work is most fun? Least fun?
    </li>
                <li>
                    What do you wish you could do more and less of?
    </li>
                <li>
                    What would you say your biggest super strength is?  What percentage of the time do you feel you use this?  How can we increase this?
    </li>
            </ol>
            <button id="submit">Submit</button>
        </div>
    )
}

export default Survey;
