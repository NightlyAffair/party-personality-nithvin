import {Link} from 'react-router-dom';
import './HomePage.css';

function HomePage() {
    return (
        <div className="HomePageContainer">
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

export default HomePage;