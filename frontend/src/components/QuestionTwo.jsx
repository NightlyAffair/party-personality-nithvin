import {useState} from 'react'

function QuestionTwo({onSubmit}) {

    const [answer, setAnswer] = useState("");

    function HandleSubmit(e) {
        e.preventDefault(); //Prevents page refresh

        if (answer) {
            onSubmit(answer);
        } else {
            alert("Please choose answer!");
        }

    }
    return(
        <div className="Question">
            <div className="QuestionTwo">
                <h1>Question 2</h1>
                <p>What do you do when you are happy?</p>
            </div>
            <div className="AnswerTwo">
                <form onSubmit={HandleSubmit}>
                    <select value={answer}  onChange={(e) => setAnswer(e.target.value)}>
                        <option>Jump for joy</option>
                        <option>Skip on your tippy-toes</option>
                    </select>
                    <input type={"submit"}/>
                </form>

            </div>
        </div>

    )
}

export default QuestionTwo;