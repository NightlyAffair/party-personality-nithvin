// src/data/DataFetch.js
import DataParse from './DataParse';

async function DataFetch() {
    try {
        // Try API first
        const apiData = await APIFetch();
        if (apiData && !apiData.error) {
            return DataParse(apiData);
        } else {
            //Try local fetch
            return DataParse(await LocalFetch());
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Re-throw to handle in component
    }
}
    
// This script fetches data from api
async function APIFetch() {
    try {
        //URL
        const response = await fetch(process.env.REACT_APP_STANDARD_QUIZ_URL);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();
        return json;
    } catch (error) {
        console.error('API fetch error:', error);
        return null;
    }
}

//Mostly only for local development
async function LocalFetch() {
    try {
        const localData = await fetch(process.env.REACT_APP_LOCAL_STANDARD_QUIZ_URL);
        if (!localData.ok) {
            throw new Error(`Local Fetch failed`);
        }
        return await localData.json();
    } catch (error) {
        console.error("No local data found", error);
        return null;
    }
}

export default DataFetch;
