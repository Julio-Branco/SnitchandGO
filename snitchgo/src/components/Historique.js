import React, { useState, useEffect } from 'react';
import { getReports, voteReport, dismissReport } from '../api/reports';
import Report from './Report';
import data from '../Data/Data.json';

export default function Historique() {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        const fetchReports = async () => {
            const reportsData = await getReports();
            setReports(reportsData);
        };
        fetchReports();
    }, []);

    const handleDismiss = async (id) => {
        await dismissReport(id);
        const updatedReports = await getReports();
        setReports(updatedReports); 
    };

    const handleVote = async (id) => {
        await voteReport(id);
        const updatedReports = await getReports();
        setReports(updatedReports); 
    };

    return (
        <div style={{ overflowY: 'scroll', height: '500px', padding: '10px' }}>
            <h1>Dénonciations</h1>
            <hr className='w-100 d-flex justify-self-center' style={{ color: "#F43535" }} />
            {reports.map((report, index) => (
                <div key={index} style={{ marginBottom: '20px' }}>
                    <Report
                        id={report.id}
                        name={report.name}
                        firstname={report.firstname}
                        date={report.date}
                        typeReport={report.typeReport}
                        nbVote={report.nbVote}
                        cours={report.cours}
                        display={report.display}
                        onDismiss={handleDismiss} // Pass the dismiss handler
                        onVote={handleVote} // Pass the vote handler
                    />
                </div>
            ))}
        </div>
    );
}
