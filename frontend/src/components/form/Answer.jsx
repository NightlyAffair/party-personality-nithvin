import'./Answer.css'

function Answer({answers, onSubmit, saveSubmit}) {

    //answers is an array of answerid:answer string key:value pairs
    console.log(answers);

    function CreateAnswer({index, answer}) {
        return (
            <div className="answer" onClick={() => {
                onSubmit(index, answer)
                saveSubmit(answer)
            }}>
                {answer}
            </div>
        )
    }


    return (<div className="answer-box">
                {answers.map((object, key) =>
                    <CreateAnswer index={Object.keys(object)[0]} answer={Object.values(object)[0]}/>)}
            </div>);
}

export default Answer;
