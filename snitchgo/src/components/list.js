import "../Styles/List.css";
import React, { useState, useEffect } from 'react';
import { getPersonnes } from '../api/personnes'

export default function List() {
    const [personnes, setPersonnes] = useState([]);

    useEffect(() => {
        const fetchPersonnes = async () => {
            const personnesData = await getPersonnes();
            setPersonnes(personnesData);
        };
        fetchPersonnes();
    }, []);

    personnes.sort((a, b) => a.score - b.score)

    return (
        <div id="list">
            {personnes.map((value, index) => (
                <div className="userCard" key={index}>
                    <div className="picture">
                        <h1>{index + 1}°</h1>
                        <img src={value.pp} alt="Profile" />
                    </div>
                    <div className="userName">
                        <h3>{value.prenom} {value.nom}</h3>
                        <h2>{value.score}</h2>
                    </div>
                </div>
            ))}
        </div>
    );
}