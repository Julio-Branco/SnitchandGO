import React, { useState, useEffect } from 'react';
import { getReports, voteReport, dismissReport } from '../api/reports';
import { getPersonnes } from '../api/personnes';
import Report from './Report';

export default function Historique() {
    const [reports, setReports] = useState([]);
    const [personnes, setPersonnes] = useState([]);

    useEffect(() => {
        const fetchReports = async () => {
            const reportsData = await getReports();
            setReports(reportsData);
        };
        fetchReports();
    }, [reports]);

    reports.sort((a, b) => new Date(b.date) - new Date(a.date));

    const handleDismiss = async (id) => {
        await dismissReport(id);
        const updatedReports = await getReports();
        console.log(updatedReports)
        setReports(updatedReports); 
    };

    const handleVote = async (id) => {
        await voteReport(id);
        const updatedReports = await getReports();
        const updatedPersonnes = await getPersonnes();
        setReports(updatedReports); 
        setPersonnes(updatedPersonnes);
    };

    return (
        <>
        <h1>Dénonciations</h1>
        <hr className='w-100 d-flex justify-self-center' style={{ color: "#F43535" }} />
        <div style={{ overflowY: 'scroll', height: '80%', padding: '20px', 'marginBottom': '15px'}}>
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
                        onDismiss={handleDismiss}
                        onVote={handleVote}
                        personId={report.personId}
                    />
                </div>
            ))}
        </div>
        </>
        
    );
}
