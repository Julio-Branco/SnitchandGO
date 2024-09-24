import React from 'react'
import Report from './Report'

export default function Historique({props}){
    return (
        <>
            <h1>Dénonciations</h1>
            <div className='hr'/>
            <Report name="John" firstname="Doe" date="2024-24-09 11:10:45" type="R" nbVote={3} />
        </>
    )
}