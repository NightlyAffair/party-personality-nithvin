import { useEffect, useState } from "react";
import Data from "../data/Data";
import QuestionLoader from "../components/QuestionLoader";

function QuizPage() {
    const [QuestionArray, setQuestions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [controlFlow, setControlFlow] = useState(null);
    const [personalities, setPersonalities] = useState(null);
    const [currentQn, setCurrentQn] = useState(0);
    const [ansData, setAnsData] = useState(null);
    const [ansArr, updateAnsArr] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await Data();
                if (data && data.questions) {
                    const jsx = QuestionLoader(data);
                    setQuestions(jsx);
                    setControlFlow(data.controlFlow);
                    setPersonalities(data.personalities);
                    setAnsData(data.answers)
                } else {
                    setError("Failed to load questions");
                }
            } catch (err) {
                console.error("Error loading quiz data:", err);
                setError(`Failed to load quiz data: ${err.message}`);
            } finally {
                setIsLoading(false);
            }
        };

        loadData();
    }, []);

    const CurrentComponent = QuestionArray[currentQn];

    function ChangeQn(num) {
        setCurrentQn(num);
    }

    function calculatePersonality() {
        //the answers that were selected
        ansArr.map((index) => ansData[index]);

        ansArr.forEach((index) => personalities[index].score += index.weight);

        personalities.sort((a, b) => a.score - b.score);


        return personalities[0];
    }

    function onSubmit(answer) {
        const newAnswers = [...ansArr, answer];
        updateAnsArr(newAnswers);

        // Safety check for controlFlow
        if (!controlFlow) {
            console.log("Control flow not available, moving to next question");
            if (currentQn < QuestionArray.length - 1) {
                return ChangeQn(currentQn + 1);
            } else {
                const result = calculatePersonality();
                console.log("Quiz completed! Answers:", newAnswers);
                console.log("Your personality:", result);
                alert(`Quiz completed! You are: ${result?.title || 'Unknown'}`);
                return;
            }
        }

        const nextQuestionId = controlFlow[answer];

        // Move to next question or complete quiz
        if (nextQuestionId && nextQuestionId !== "end" && nextQuestionId < QuestionArray.length) {
            return ChangeQn(parseInt(nextQuestionId));
        } else {
            // Quiz is complete
            const result = calculatePersonality();
            console.log("Quiz completed! Answers:", newAnswers);
            console.log("Your personality:", result);
            alert(`Quiz completed! You are: ${result?.title || 'Unknown'}`);
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