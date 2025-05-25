import {Link} from 'react-router-dom'

function HomePage() {
    return (
        <>
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
        </>
    )
}

export default HomePage;