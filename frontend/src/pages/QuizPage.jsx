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
            if (data && data.questions) {
                const jsx = QuestionLoader(data);
                setQuestions(jsx);
                setControlFlow(data.controlFlow);
            } else {
                setError("Failed to load questions");
            }
            setIsLoading(false);
        }).catch((err) => {
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
        updateAnsArr(prev => [...prev, answer]);
        
        // Safety check for controlFlow
        if (!controlFlow) {
            console.log("Control flow not available, moving to next question");
            if (currentQn < QuestionArray.length - 1) {
                return ChangeQn(currentQn + 1);
            } else {
                console.log("Quiz completed! Answers:", [...ansArr, answer]);
                return;
            }
        }

        const nextQuestionId = controlFlow[answer];
        
        // Move to next question or complete quiz
        if (nextQuestionId && nextQuestionId !== "end" && nextQuestionId < QuestionArray.length) {
            return ChangeQn(parseInt(nextQuestionId));
        } else {
            // Quiz is complete
            console.log("Quiz completed! Answers:", [...ansArr, answer]);
            alert("Quiz completed! Check console for results."); // Temporary for deployment
        }
    }

    // Safety checks before rendering
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
                <div className="quiz-progress">
                    Question {currentQn + 1} of {QuestionArray.length}
                </div>
            </div>
        </div>
    );
}

export default QuizPage;
