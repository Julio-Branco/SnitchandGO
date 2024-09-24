import "../Styles/List.css";
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
            <div className="userCard">
                <h1>1°</h1>
                <div className="picture">
                    <img src={data.personnes[0].pp} alt="" />

                    
                </div>
                <div className="userName">
                    <h3>{data.personnes[0].prenom} {data.personnes[0].nom}</h3>
                    <h2>{data.personnes[0].score}</h2>
                </div>
            </div>
        )   
    }
}