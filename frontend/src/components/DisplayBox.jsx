import Answer from "./Answer";
import Question from "./Question";
import './DisplayBox.css'

//Focused on correctly rendering the history, currentQn and answerOptions
function DisplayBox({ question, onSubmit }) {

    //Question contains id, questionId, question(string) and answers(list of objects)

    //History management
    //const [history, setHistory] = useState(null)

    //Saves both the question and the answer picked

    //Current Qn
    const DisplayQuestion = <Question questionText = {question.question}/>

    const Answers = <Answer answers = {question.answers} onSubmit={onSubmit} />

    return (
        <div className="DisplayBox">
            {/*<div className="history">*/}
            {/*    <History />*/}
            {/*</div>*/}
            <div className="CurrentQuestion">
                {DisplayQuestion}
            </div>
            <div className="Answers">
                {Answers}
            </div>
        </div>
    )
}

export default DisplayBox;
