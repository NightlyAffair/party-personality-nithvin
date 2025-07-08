import'./Answer.css'

function SelectedAnswer({answer}) {

    return (<div className="answer-box">
        <div className="answer">
            {answer}
        </div>
    </div>);
}

export default SelectedAnswer;