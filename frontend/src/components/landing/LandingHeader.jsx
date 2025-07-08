import { useNavigate } from 'react-router-dom';
import "./LandingHeader.css"

function LandingHeader() {
    const navigate = useNavigate()

    const navigationArray = [
        {label: 'Sample Quiz', path: '/quiz'},
        {label: 'Home', path: '/home'}
    ]


    return (
        <div className="landing-header">
            <div className="logo">
                Party Personality
            </div>
            <div className="sections">
                {navigationArray.map((item, index) => (
                    <button className={"section-button"} key={index} onClick={() => navigate(item.path)}>
                        {item.label}
                    </button>
                ))}
            </div>
            <div className="auth">
                <button className={"auth-button"} onClick={() => navigate('/login')}>
                    Login
                </button>
                <button className={"auth-button"} onClick={() => navigate('/signup')}>
                    Sign up
                </button>

            </div>
        </div>
    )
}

export default LandingHeader;