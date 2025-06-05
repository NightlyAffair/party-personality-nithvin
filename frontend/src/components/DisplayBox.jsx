import {useState} from "react";

function DisplayBox({ Question }) {

    const [ouput, setouput] = useState(null)
    const [nextQuestion, setNextQuestion] = useState(null);

    return (
        <div className="DisplayBox">
            <div className="prevOutput">
                <output />
            </div>
            <div className="nextOutput">
                <nextQuestion />
            </div>
        </div>
    )
}

export default DisplayBox;