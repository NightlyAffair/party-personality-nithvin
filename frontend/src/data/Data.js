// src/data/Data.js
import ParseJson from './ParseJson';

async function Data() {
    try {
        // Try API first
        const apiData = await APIFetch();
        if (apiData) {
            return ParseJson(apiData);
        } else {
            //Try local fetch
            return ParseJson(LocalFetch());
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
        const response = await fetch('https://party-personality-nithvin-production.up.railway.app/quiz/1');

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();
        return json;
    } catch (error) {
        console.error('API fetch error:', error);
        throw error;
    }
}

//Mostly only for local development
async function LocalFetch() {
    try {
        const localData = await fetch("./data.json");
        if (!localData) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await localData.json();
        return json;
    } catch (error) {
        console.error("No local data found", error);
    }
}

export default Data;