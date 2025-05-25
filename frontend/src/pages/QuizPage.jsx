import {useContext, useState} from "react";

import QuestionOne from "../components/QuestionOne";
import QuestionTwo from "../components/QuestionTwo";

function QuizPage() {
    let QuestionArray = [QuestionOne, QuestionTwo];
    const [currentQn, setCurrentQn] = useState(0);
    const [ansArr, updateAnsArr] = useState([]);
    const CurrentComponent = QuestionArray[currentQn];

    function ChangeQn() {
        setCurrentQn(prevNumber => prevNumber + 1);
    }

    function onSubmit(answer) {
        updateAnsArr(prev=>[...prev, answer])

        // Move to next question
        if (currentQn < QuestionArray.length - 1) {
            ChangeQn();
        } else {
            // Quiz is complete
            console.log("Quiz completed! Answers:", [...ansArr, answer]);
        }

    }

    return (
        <div className="QuizContainer">
            <div className="Quiz">
                <CurrentComponent onSubmit={onSubmit} />
            </div>
        </div>
    )
}

export default QuizPage;