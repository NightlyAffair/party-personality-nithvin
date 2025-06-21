import'./Answer.css'

function SelectedAnswer({answer}) {

    return (<div className="AnswerBox">
        <div className="Answer">
            {answer}
        </div>
    </div>);
}

export default SelectedAnswer;