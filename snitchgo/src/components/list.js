import React from 'react'
import data from '../Data/Data.json';

export default function list(){
    return (
        <div id="list">
            {Item()}
        </div>
    )
    function Item(){
        return (
            <div className="flex">
                <div className="item">
                    <div className="info">
                        <img src={data.personnes[0].pp.url} />
                        <span></span>
                        <h3 className="nom text-dark">{data.personnes[0].prenom} {data.personnes[0].nom}</h3>
                        <span>{data.personnes[0].score}</span>
                    </div>
                </div>
            </div>
        )
    }
}