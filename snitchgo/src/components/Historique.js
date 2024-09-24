import React from 'react'
import Report from './Report'
import data from '../Data/Data.json'

export default function Historique() {
    return (
        <div style={{ 
            overflowY: 'scroll',
            height: '500px',
            padding: '10px'
        }}>
            <h1>Dénonciations</h1>
            <hr className='w-100 d-flex justify-self-center' style={{ color: "#F43535" }} />
            {data.reports.map((report, index) => (
                <div key={index} style={{ marginBottom: '20px' }}>
                    <Report
                        name={report.name}
                        firstname={report.firstname}
                        date={report.date}
                        typeReport={report.typeReport}
                        nbVote={report.nbVote}
                        cours={report.cours}
                        display={report.display}
                    />
                </div>
            ))}
        </div>
    )
}
    