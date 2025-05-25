function ParseJson(data) {
    // Validate the JSON structure
    if (!data.questions || !data.controlFlow) {
        throw new Error('Invalid quiz format');
    }

    // Process or transform the data as needed
    console.log(`Loaded ${data.questions.length} questions`);

    // Maybe set up the quiz state
    const questions = data.questions;
    const controlFlow = data.controlFlow;
    const personality = data.results;

    return {questions, controlFlow, personality};
}

export default ParseJson;
