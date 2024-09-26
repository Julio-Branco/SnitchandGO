// server.js
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 5001; // Choose a port
const path = require('path');

app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON bodies

// Load JSON data
let data = require('../Data/Data.json');

app.get('/reports', (req, res) => {
    res.json(data.reports.filter(report => report.display === 'y'));
});

app.post('/reports/vote', (req, res) => {
    const { id } = req.body;
    const report = data.reports.find(r => r.id === id);
    if (report) {
        report.nbVote += 1; // Increment vote count
        saveData();
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    }
});

app.post('/reports/add', (req, res) => {
    const newReport = req.body;
    console.log(newReport);

    if (!newReport || !newReport.name || !newReport.firstname) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    data.reports.push(newReport);
    
    saveData();

    res.status(201).json({ message: 'Report added successfully', report: newReport });
});


app.post('/reports/dismiss', (req, res) => {
    const { id } = req.body;
    const report = data.reports.find(r => r.id === id);
    if (report) {
        report.display = 'n'; // Change display to 'n'
        console.log(`Report dismissed: ${JSON.stringify(report)}`); // Log the updated report

        saveData(); // Save the updated data synchronously
        res.sendStatus(200); // Respond only after save completes
    } else {        
        console.log(`Report with id ${id} not found`); // Log if not found
        res.sendStatus(404); // Respond with 404 if not found
    }
});

app.get('/personnes', (req, res) => {
    res.json(data.personnes);
});

app.put('/personnes/:id', (req, res) => {
    const personId = parseInt(req.params.id);
    const { score } = req.body;

    const personneIndex = data.personnes.findIndex(p => p.id === personId);
    if (personneIndex !== -1) {
        data.personnes[personneIndex].score = score;

        saveData();
        res.status(200).send(data.personnes[personneIndex]);
    } else {
        res.status(404).send({ message: 'Person not found' });
    }
});

const saveData = () => {
    try {
        const filePath = path.join(__dirname, '..', 'Data', 'Data.json');
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
        console.log('Data saved successfully');
    } catch (error) {
        console.error('Error saving data:', error); 
    }
};

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

