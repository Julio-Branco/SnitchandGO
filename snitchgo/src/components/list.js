import "../Styles/List.css";
import React from "react";
import Data from "../Data/Data.json";

export default function List() {
    const donneeOrganiser = [...Data.personnes].sort((a, b) => a.score - b.score)

    return (
        <div id="list">
            {donneeOrganiser.map((value, index) => (
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