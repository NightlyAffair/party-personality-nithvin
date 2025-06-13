import {useState} from "react";
import Question from "./Question";

function QuestionLoader({ questions, controlFlow, personality }, onSubmit) {
    let QuestionArray = [];

    for (let i = 0; i < questions.length; i++) {
        const question = questions[i];
        const questionText = question.Question;
        const answers = question.Answers;
        QuestionArray.push(Question(questionText, answers, onSubmit))
    }

    return QuestionArray;
}

export default QuestionLoader;