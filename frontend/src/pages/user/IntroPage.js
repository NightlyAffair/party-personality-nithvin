import {Link} from 'react-router-dom';
import './IntroPage.css';

function IntroPage() {
    return (
        <div className="intro-container">
            <h1>
                Welcome to Party Personality!
            </h1>

            <h2>
                Press Enter below to start
            </h2>

            <Link to="/quiz">
                <button>
                    Enter
                </button>
            </Link>
        </div>
    )
}

export default IntroPage;