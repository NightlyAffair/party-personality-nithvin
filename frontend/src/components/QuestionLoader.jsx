import {useState} from "react";

function QuestionLoader({ questions, controlFlow, personality }) {
    let QuestionArray = [];

    for (let i = 0; i < questions.length; i++) {
        const question = questions[i];
        const questionText = question.Question;
        const answers = question.Answers;
        QuestionArray.push(CreateQuestion(questionText, answers))
    }

    return QuestionArray;
}

function CreateQuestion(questionText, answers) { // Fixed parameter destructuring
    return function Question({ onSubmit }) { // Fixed prop name casing

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
    };
}

export default QuestionLoader;