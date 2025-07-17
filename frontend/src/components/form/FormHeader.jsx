import backButton from '../../assets/icons/back_button.png';
import './FormHeader.css'

function FormHeader({quizName, rollback}) {
    //Contains a back button and the name of the quiz
    return (
        <div className="quiz-header">
            <button className="BackButton" onClick={() => rollback()}>
                <img src={backButton} alt="Back Button" />
            </button>
            <div className="quiz-name">
                {quizName}
            </div>
            <div>
            </div>
        </div>
    )
}

export default FormHeader;