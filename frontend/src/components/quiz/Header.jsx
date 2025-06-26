import backButton from '../../assets/icons/back_button.png';
import './Header.css'

function Header({quizName, rollback}) {
    //Contains a back button and the name of the quiz
    return (
        <div className="Header">
            <button className="BackButton" onClick={() => rollback()}>
                <img src={backButton} alt="Back Button" />
            </button>
            <div className="QuizName">
                {quizName}
            </div>
            <div>
            </div>
        </div>
    )
}

export default Header;