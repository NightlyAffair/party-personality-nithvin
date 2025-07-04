function DataParse(data) {
    // Handle array response from API
    const quizData = Array.isArray(data) ? data[0] : data;

    console.log(quizData);

    // Validate the JSON structure
    if (!quizData.questions || !quizData.controlFlow || !quizData.personalities || !quizData.answers) {
        throw new Error('Invalid quiz format: missing required fields');
    }

    console.log(`Loaded ${quizData.questions.length} questions`);

    return Transform(quizData);
}

function Transform(quizData) {
    // Transform questions to match expected format
    const questions = quizData.questions.map(q => ({
        id: q.id,
        questionId: q.questionId,
        question: q.question,
        answers: q.answers.map(a => ({
            [a.answerId]: a.answer
        }))
    }));

    // Transform control flow from array to object mapping
    const controlFlow = {};
    quizData.controlFlow.forEach(cf => {
        controlFlow[cf.key] = cf.value === -1 ? "end" : cf.value;
    });

    // Transform personalities
    const personalities = quizData.personalities.reduce((acc, p) => {
        acc[p.personalityId] = {
            name: p.name,
            title: p.title,
            description: p.description,
            score: 0
        };
        return acc;
    }, {});

    //Transform answers
    const answers = quizData.answers.reduce((acc, p) => {
        acc[p.answerId] = {
        weight: p.weight,
        association: p.association,
        };
    return acc;
    }, {});
    return { questions, controlFlow, personalities, answers };
}

export default DataParse;