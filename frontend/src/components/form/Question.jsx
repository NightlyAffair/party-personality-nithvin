import './Question.css'

function Question( {questionText} ) { // Fixed prop name casing

    // JSX return moved outside HandleSubmit function
    //Describes the component Question
    return (
        <div className="question">
            <p>{questionText}</p>
        </div>
    );
}

export default Question;