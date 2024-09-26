import axios from 'axios';

export const getReports = async () => {
    const response = await axios.get('http://localhost:5001/reports');
    return response.data;
};

export const voteReport = async (id) => {
    await axios.post('http://localhost:5001/reports/vote', { id });
};

export const dismissReport = async (id) => {
    await axios.post('http://localhost:5001/reports/dismiss', { id });
};

export const addReport = async (report) => {
    try {
        const response = await axios.post('http://localhost:5001/reports/add', report);
        console.log('Report added successfully:', response.data); // Log the server response
    } catch (error) {
        // Log the entire error object for more information
        console.error('Error adding the report:', error);
    
        if (error.response) {
            // Server responded with a status code outside 2xx
            console.error('Error response data:', error.response.data);
            console.error('Error response status:', error.response.status);
            console.error('Error response headers:', error.response.headers);
        } else if (error.request) {
            // Request was made but no response received
            console.error('No response received:', error.request);
        } else {
            // Some other error occurred during setting up the request
            console.error('Error setting up request:', error.message);
        }
    }
    
};
