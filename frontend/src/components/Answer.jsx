import'./Answer.css'

function Answer({answers, onSubmit}) {

    //answers is an array of answerid:answer string key:value pairs
    console.log(answers);

    function CreateAnswer({index, answer}) {
        return (
            <div className="Answer" onClick={() => onSubmit(index)}>
                {answer}
            </div>
        )
    }


    return (<div className="AnswerBox">
                {answers.map((object, key) => <CreateAnswer index={Object.keys(object)[0]} answer={Object.values(object)[0]}/>)}
            </div>);
}

export default Answer;
