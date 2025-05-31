import {useLocation} from "react-router-dom";

function PersonalityPage() {
    const location = useLocation();
    const personality = location.state.personality;



    return (
        <>
            <h1>Quiz Completed</h1>
            <p>You are: {personality.title}</p>
        </>
    )
}



export default PersonalityPage;