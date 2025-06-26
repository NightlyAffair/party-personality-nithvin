import { useEffect, useState } from "react";
import Data from "../data/Data";
import { useNavigate } from "react-router-dom";
import DisplayBox from "../components/quiz/DisplayBox";
import './QuizPage.css';
import Header from "../components/quiz/Header";

//QuizPage will handle the logic for the DisplayBox
function QuizPage() {
    const navigate = useNavigate();

    //Arrays for holding the data
    const [questionArray, setQuestionArray] = useState([]);
    const [controlFlow, setControlFlow] = useState(null);
    const [personalities, setPersonalities] = useState(null);
    const [ansData, setAnsData] = useState(null);

    //States for handling changing of question and answers
    const [currentQn, setCurrentQn] = useState(0);
    const [ansArr, updateAnsArr] = useState([]);
    const [history, setHistory] = useState([])
    const [prevQn, setPrevQn] = useState([]);

    //Error handling
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    //Data loader
    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await Data();
                console.log(data);
                if (data) {
                    setQuestionArray(data.questions);
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
    }, []); //Loads once on init

    //Sets the current question to be displayed
    const CurrentComponent = <DisplayBox question = {questionArray[currentQn]} onSubmit = {onSubmit} history={history} setHistory={setHistory} />;

    function ChangeQn(num) {
        setCurrentQn(num);
    }

    function calculatePersonality() {
        console.log(ansArr);
        console.log(ansData)

        //the answers that were selected
        const answerObjects = ansArr.map((index) => ansData[index]);



        answerObjects.forEach((index) => {
            personalities[index.association].score += index.weight
        });

        const personalityArray = Object.values(personalities);
        personalityArray.sort((a, b) => b.score - a.score);


        return personalityArray[0];
    }

    function onSubmit(index, answer) {
        updateAnsArr((prev) => [...prev, index]);
        console.log(index);

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

        const nextQuestionId = controlFlow[index];

        // Move to next question or complete quiz
        if (nextQuestionId && nextQuestionId !== "end" && nextQuestionId < questionArray.length) {
            setPrevQn((prev) => [...prev, currentQn]);
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

    //Allows for rollback of the quiz answer
    function rollback() {
        //Need to change the history display
        if (history.length >= 2) {
            setHistory(prev => prev.slice(0,-2));
            updateAnsArr((prev) => prev.slice(0,-1));
            const rollbackId = prevQn.pop()
            setCurrentQn(rollbackId);
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
            <div className="Header">
                <Header quizName={"Party Personality"} rollback={rollback} />
            </div>
            <div className="Quiz">
                {CurrentComponent}
            </div>
        </div>
    );
}

export default QuizPage;