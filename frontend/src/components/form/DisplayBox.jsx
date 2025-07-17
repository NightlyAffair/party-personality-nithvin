import Answer from "./Answer";
import Question from "./Question";
import SelectedAnswer from "./SelectedAnswer";
import './DisplayBox.css'

//Focused on correctly rendering the history, currentQn and answerOptions
function DisplayBox({ question, onSubmit, history, setHistory }) {
    //Question contains id, questionId, question(string) and answers(list of objects)

    //Saves both the question and the answer picked
    function saveSubmit(answer) {
        setHistory((prev) => [...prev, DisplayQuestion, <SelectedAnswer answer = {[answer]} />]);
    }



    //Current Qn
    const DisplayQuestion = <div className='CurrentQuestion'><Question questionText = {question.question}/></div>
    const Answers = <Answer answers = {question.answers} onSubmit={onSubmit} saveSubmit={saveSubmit} />
    const History = <div className = "History">{history.map(x => <div>{x}</div>)}</div>




    return (
        <div className="display-box">
            <div className="history">
                {History}
            </div>
            {DisplayQuestion}
            <div className="answers">
                {Answers}
            </div>
        </div>
    )
}

export default DisplayBox;
