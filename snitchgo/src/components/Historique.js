import React from 'react'
import Report from './Report'

export default function Historique(){
    return (
        <div className='flex'>
            <h1>Dénonciations</h1>
            <hr className='w-75 align-self-center' style={{color: "#F43535"}}/>
            <Report name="John" firstname="Doe" date="2024-24-09 11:10:45" typeReport="R" nbVote={3} cours="Python" />
        </div>
    )
}