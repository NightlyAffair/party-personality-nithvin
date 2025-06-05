import { useEffect, useState } from "react";
import Data from "../data/Data";
import QuestionLoader from "../components/QuestionLoader";
import { useNavigate } from "react-router-dom";
import DisplayBox from "../components/DisplayBox";
import './QuizPage.css';

function QuizPage() {
    const navigate = useNavigate();
    const [questionArray, setQuestionArray] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [controlFlow, setControlFlow] = useState(null);
    const [personalities, setPersonalities] = useState(null);
    const [currentQn, setCurrentQn] = useState(0);
    const [ansData, setAnsData] = useState(null);
    const [ansArr, updateAnsArr] = useState([]);

    //Data loader
    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await Data();
                if (data && data.questions) {
                    const jsx = QuestionLoader(data);
                    setQuestionArray(jsx);
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

    //Sets the current question to be displayed
    const CurrentComponent = DisplayBox(questionArray[currentQn]);

    function ChangeQn(num) {
        setCurrentQn(num);
    }

    function calculatePersonality() {
        //the answers that were selected
        const answerObjects = ansArr.map((index) => ansData[index]);

        answerObjects.forEach((index) => personalities[index.association].score += index.weight);

        const personalityArray = Object.values(personalities);
        personalityArray.sort((a, b) => b.score - a.score);


        return personalityArray[0];
    }

    function onSubmit(answer) {
        const newAnswers = [...ansArr, answer];
        updateAnsArr(newAnswers);

        // Safety check for controlFlow
        if (!controlFlow) {
            console.log("Control flow not available, moving to next question");
            if (currentQn < questionArray.length - 1) {
                return ChangeQn(currentQn + 1);
            } else {
                const result = calculatePersonality();
                return navigate("./results", {
                        state: {
                            personality: result
                        }
                    }
                );
            }
        }

        const nextQuestionId = controlFlow[answer];

        // Move to next question or complete quiz
        if (nextQuestionId && nextQuestionId !== "end" && nextQuestionId < questionArray.length) {
            return ChangeQn(parseInt(nextQuestionId));
        } else {
            const result = calculatePersonality();
            // Quiz is complete
            console.log("Navigating with result:", result); // Debug log
            return navigate("./results", {
                    state: {
                        personality: result
                    }
                }
            )
        }
    }

    // Safety checks before rendering
    if (isLoading) {
        return <div>Loading quiz...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (questionArray.length === 0) {
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
                    Question {currentQn + 1} of {questionArray.length}
                </div>
            </div>
        </div>
    );
}

export default QuizPage;