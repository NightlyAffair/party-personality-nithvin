import LandingHeader from '../components/landing/LandingHeader'
import {useNavigate} from "react-router-dom";
import "./LandingPage.css"
import gifbackground from '../assets/gif/gif-background.gif';

function LandingPage() {

    const navigate = useNavigate();

    const buttonArray = [
        {label: "Professional", link: ""},
        {label: "Cutesy", link: ""},
        {label: "Academic", link: ""},
        {label: "Neutral", link: ""}
    ]


    return (
        <div className={"landing"}>
            <div className="landing-header">
                <LandingHeader />
            </div>
            <div className="landing-content">
                <div className={"landing-image"}>
                    <img className={"gif-background"} src={gifbackground} alt="Quiz" />
                </div>
                <div className="landing-body">
                    <div className="landing-text">
                        Create Your Very Own Personality Quiz
                    </div>
                    <button className="landing-body-button" onClick={() => navigate("/login")}>
                        Get Started
                    </button>
                </div>
            </div>
            <div className="landing-footer">
                <div className={"footer-title"}>
                    Or use one of our templates
                </div>
                <div className={"footer-button-container"}>
                    {buttonArray.map((item, index) => (
                        <button key={index} className="footer-button" onClick={() => navigate(item.link)}>{item.label}</button>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default LandingPage;