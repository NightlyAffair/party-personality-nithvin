import {useEffect, useState} from "react";

import Data from "../data/Data";
import QuestionLoader from "../components/QuestionLoader";


function QuizPage() {
    const [QuestionArray, setQuestions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [controlFlow, setControlFlow] = useState(null);
    useEffect(() => {
        Data().then((data) => {
            if (data && data.questions) {  // Added validation
                const jsx = QuestionLoader(data);
                setQuestions(jsx);
                setControlFlow(data.controlFlow);
            } else {
                setError("Failed to load questions");  // Added error handling
            }
            setIsLoading(false);
        }).catch((err) => {  // Added catch block
            setError("Failed to load quiz data");
            setIsLoading(false);
        });
    }, []);


    const [currentQn, setCurrentQn] = useState(0);
    const [ansArr, updateAnsArr] = useState([]);
    const CurrentComponent = QuestionArray[currentQn];

    function ChangeQn(num) {
        setCurrentQn(num);
    }

    function onSubmit(answer) {
        updateAnsArr(prev=>[...prev, answer])
        const nextQuestionId = controlFlow[answer];
        // Move to next question
        if (nextQuestionId !== "end") {
            return ChangeQn(nextQuestionId);
        } else {
            // Quiz is complete
            console.log("Quiz completed! Answers:", [...ansArr, answer]);
        }

    }

    // Safety checks before rendering:
    if (isLoading) {
        return <div>Loading quiz...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (QuestionArray.length === 0) {
        return <div>No questions available</div>;
    }

    if (!CurrentComponent) {
        return <div>Error: Question not found</div>;
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