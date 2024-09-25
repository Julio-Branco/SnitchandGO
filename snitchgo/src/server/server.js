// server.js
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 5001; // Choose a port

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

app.post('/reports/dismiss', (req, res) => {
    const { id } = req.body;
    const report = data.reports.find(r => r.id === id);
    if (report) {
        report.display = 'n'; // Change display to 'n'
        saveData();
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
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
    fs.writeFileSync('../Data/Data.json', JSON.stringify(data, null, 2));
};

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

