import {useState} from 'react'

function QuestionOne({onSubmit}) {

    const [answer, setAnswer] = useState("");

    function HandleSubmit(e) {
        e.preventDefault(); //Prevents page refresh

        if (answer) {
            return onSubmit(answer);
        } else {
            alert("Please choose answer!");
        }

    }
    return(
        <div className="Question">
            <div className="QuestionOne">
                <h1>Question 1</h1>
                <p>What do you do when you are bored?</p>
            </div>
            <div className="AnswerOne">
                <form onSubmit={HandleSubmit}>
                    <select value={answer}  onChange={(e) => setAnswer(e.target.value)}>
                        <option>Something Productive</option>
                        <option>Brain rot</option>
                    </select>
                    <input type={"submit"}/>
                </form>

            </div>
        </div>

    )
}

export default QuestionOne;