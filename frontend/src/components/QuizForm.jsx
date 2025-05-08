// src/components/QuizForm.jsx
'use client';

import { useState } from 'react';
import { submitQuiz } from '@/services/api';
import { useRouter } from 'next/navigation';

export default function QuizForm() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        favoriteMusic: '',
        preferredDrink: '',
        dancingStyle: '',
        arrivalTime: '',
        socialStyle: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const result = await submitQuiz(formData);
            router.push(`/results/${result.id}`);
        } catch (error) {
            console.error("Error submitting quiz:", error);
            alert("There was an error submitting your quiz. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center mb-6">Find Your Party Personality</h2>
            <p className="text-gray-600 mb-6 text-center">Answer these questions to discover what kind of party animal you are!</p>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>

                <div>
                    <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">Age:</label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                        min="18"
                        max="120"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>

                <div>
                    <label htmlFor="favoriteMusic" className="block text-sm font-medium text-gray-700 mb-1">Favorite Music Genre:</label>
                    <select
                        id="favoriteMusic"
                        name="favoriteMusic"
                        value={formData.favoriteMusic}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    >
                        <option value="">Select genre...</option>
                        <option value="pop">Pop</option>
                        <option value="rock">Rock</option>
                        <option value="hip-hop">Hip Hop</option>
                        <option value="edm">EDM</option>
                        <option value="jazz">Jazz</option>
                        <option value="country">Country</option>
                        <option value="classical">Classical</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="preferredDrink" className="block text-sm font-medium text-gray-700 mb-1">Preferred Party Drink:</label>
                    <select
                        id="preferredDrink"
                        name="preferredDrink"
                        value={formData.preferredDrink}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    >
                        <option value="">Select drink...</option>
                        <option value="wine">Wine</option>
                        <option value="beer">Beer</option>
                        <option value="cocktail">Cocktails</option>
                        <option value="spirits">Spirits</option>
                        <option value="nonalcoholic">Non-Alcoholic</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="dancingStyle" className="block text-sm font-medium text-gray-700 mb-1">Your Dancing Style:</label>
                    <select
                        id="dancingStyle"
                        name="dancingStyle"
                        value={formData.dancingStyle}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    >
                        <option value="">Select style...</option>
                        <option value="enthusiastic">Enthusiastic - I own the dance floor</option>
                        <option value="rhythmic">Rhythmic - I can follow the beat well</option>
                        <option value="reserved">Reserved - I dance a little</option>
                        <option value="observer">Observer - I prefer to watch</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="arrivalTime" className="block text-sm font-medium text-gray-700 mb-1">When do you typically arrive at parties?</label>
                    <select
                        id="arrivalTime"
                        name="arrivalTime"
                        value={formData.arrivalTime}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    >
                        <option value="">Select arrival time...</option>
                        <option value="early">Early - I help set up</option>
                        <option value="ontime">Right on time</option>
                        <option value="fashionably">Fashionably late</option>
                        <option value="veryLate">Very late - when it's in full swing</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="socialStyle" className="block text-sm font-medium text-gray-700 mb-1">Your Social Style at Parties:</label>
                    <select
                        id="socialStyle"
                        name="socialStyle"
                        value={formData.socialStyle}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    >
                        <option value="">Select style...</option>
                        <option value="butterfly">Social Butterfly - I talk to everyone</option>
                        <option value="selective">Selective - I stick with my friend group</option>
                        <option value="connector">Connector - I introduce people to each other</option>
                        <option value="wallflower">Wallflower - I observe the social dynamics</option>
                    </select>
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                >
                    {isLoading ? 'Finding your personality...' : 'Discover My Party Personality!'}
                </button>
            </form>
        </div>
    );
}