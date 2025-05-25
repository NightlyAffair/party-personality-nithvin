// src/data/Data.js
import questionsData from './DefaultQuestions.json'; // This should work for JSON
import ParseJson from './ParseJson';

async function Data() {
    try {
        // Try API first
        const apiData = await APIFetch();
        if (apiData) {
            return ParseJson(apiData);
        }

        // Fall back to default data
        return await DefaultFetch();
    } catch (error) {
        console.error('Error in Data():', error);
        return null;
    }
}

// This script fetches data from api
async function APIFetch() {
    // Return null for now, implement API call later
    return null;
}

// This script fetches data from default questions
async function DefaultFetch() {
    try {
        // questionsData is already parsed when imported as JSON
        return ParseJson(questionsData);
    } catch (error) {
        console.error('Error loading default questions:', error);
        return null;
    }
}

export default Data;