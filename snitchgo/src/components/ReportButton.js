import React, { useState, useEffect } from 'react';
import { getReports, addReport } from '../api/reports';  // Fetch reports from the API
import { getPersonnes } from '../api/personnes';  // Fetch personnes from the API

export default function ReportButton() {
    const [reports, setReports] = useState([]);
    const [personnes, setPersonnes] = useState([]);
    const [selectedPersonId, setSelectedPersonId] = useState('');
    const [matiere, setMatiere] = useState('');
    const [typeReport, setTypeReport] = useState('');

    // Fetch reports and personnes when the component mounts
    useEffect(() => {
        const fetchData = async () => {
            const fetchedReports = await getReports();
            const fetchedPersonnes = await getPersonnes();
            setReports(fetchedReports);
            setPersonnes(fetchedPersonnes);
        };
        fetchData();
    }, []);

    // Helper function to get the last report ID
    const getLastReportId = () => {
        return reports.length > 0 ? reports[reports.length - 1].id : 0;
    };

    // Handle form submission
    const handleSubmit = async () => {
        const person = personnes.find(p => p.id === parseInt(selectedPersonId));
        const now = new Date();
        const formattedDate = now.toISOString().slice(0, 19).replace('T', ' ');  // Format as "YYYY-MM-DD HH:MM:SS"

        const newReport = {
            id: getLastReportId() + Math.floor(Math.random() * 999),
            name: person.nom,
            firstname: person.prenom,
            date: formattedDate,
            typeReport,
            nbVote: 1,  // Initialize with 1 vote
            cours: matiere,
            display: 'y',  // Always set to 'y'
            personId: 0  // Always set to '0'
        };

        try {
            const response = await addReport(newReport);
        } catch (error) {
            console.error('Error adding the report:', error);
        
            // Safely access error response data
            if (error.response) {
                console.error('Error response data:', error.response.data);
                console.error('Error response status:', error.response.status);
                console.error('Error response headers:', error.response.headers);
            } else if (error.request) {
                console.error('No response received:', error.request);
            } else {
                console.error('Error setting up request:', error.message);
            }
        }
        
    };

    return (
        <div style={{ marginTop: '55px' }}>
            <img
                src={"/img/ReportButton.png"}
                alt="Report Button"
                style={{ cursor: 'pointer', width: '100px', height: '100px' }}
                data-bs-toggle="modal"
                data-bs-target="#ModalReportPopup"
            />
            <div
                className="modal fade"
                id="ModalReportPopup"
                tabIndex="-1"
                aria-labelledby="profileModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="profileModalLabel">
                                Balance ton collègue
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <select
                                id="personSelect"
                                className="form-control"
                                value={selectedPersonId}
                                onChange={(e) => setSelectedPersonId(e.target.value)}
                            >
                                <option disabled value="">Choisis l'élève</option>
                                {personnes.map(person => (
                                    <option key={person.id} value={person.id}>
                                        {person.prenom} {person.nom}
                                    </option>
                                ))}
                            </select>
                            <input
                                className="form-control mt-2"
                                id="matiere"
                                placeholder="Matière"
                                value={matiere}
                                onChange={(e) => setMatiere(e.target.value)}
                            />
                            <h5 style={{ color: "gray" }}>Raison :</h5>
                            <div className="radioButtonReport">
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="radioDenonce"
                                        id="radioRetard"
                                        value="R"
                                        onChange={(e) => setTypeReport(e.target.value)}
                                    />
                                    <label className="form-check-label" htmlFor="radioRetard">Retard</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="radioDenonce"
                                        id="radioAbsent"
                                        value="A"
                                        onChange={(e) => setTypeReport(e.target.value)}
                                    />
                                    <label className="form-check-label" htmlFor="radioAbsent">Absence</label>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                style={{ backgroundColor: "green" }}
                                onClick={handleSubmit}  // Call handleSubmit when "Valider" is clicked
                                data-bs-dismiss="modal"
                            >
                                Valider
                            </button>
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Fermer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
