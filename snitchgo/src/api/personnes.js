import axios from 'axios';

const BASE_URL = 'http://localhost:5001/personnes';

// Function to get all personnes
export const getPersonnes = async () => {
    const response = await axios.get(BASE_URL);
    return response.data;
};

// Function to increment the score of a personne
export const incrementScore = async (personId) => {
    try {
        
        const data  = await getPersonnes();
        console.log(data);
        
        if (!Array.isArray(data)) {
            throw new Error('Personnes data is not available');
        }
        // Find the person to increment
        const personneIndex = data.findIndex(personne => personne.id === personId);
        console.log(personneIndex , typeof personneIndex)
        if (personneIndex !== -1) {
            data[personneIndex].score += 15;

            // Update the JSON data on the server
            await axios.put(`${BASE_URL}/${personId}`, { score: data[personneIndex].score });
        } else {
            throw new Error('Person not found');
        }
    } catch (error) {
        console.error('Error incrementing score:', error);
    }
};
