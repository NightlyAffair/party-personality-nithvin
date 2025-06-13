import {useState} from "react";

function Question( questionText, answers, onSubmit ) { // Fixed prop name casing

    const [answer, setAnswer] = useState("");

    function HandleSubmit(e) {
        e.preventDefault();

        if (answer) {
            onSubmit(answer);
        } else {
            alert("Please choose answer!");
        }
    }

    // JSX return moved outside HandleSubmit function
    //Describes the component Question
    return (
        <div className="Question">
            <div className="QuestionSection">
                <p>{questionText}</p>
            </div>
            <div className="AnswerSection">
                <form onSubmit={HandleSubmit}>
                    <select value={answer} onChange={(e) => setAnswer(e.target.value)}>
                        <option value="">Select an answer...</option>
                        {answers.map((answerObj) => {
                            // Extract key and value from each answer object
                            const [key, value] = Object.entries(answerObj)[0];
                            return (
                                <option key={key} value={key}>
                                    {value}
                                </option>
                            );
                        })}
                    </select>
                    <input type="submit"/>
                </form>
            </div>
        </div>
    );
}

export default Question;