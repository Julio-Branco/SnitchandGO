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

