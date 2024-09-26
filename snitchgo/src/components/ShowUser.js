import { useEffect, useState } from "react";

export const ShowUser = (props) => {
    const personne = props.personne;
    const [selectedPerson, setSelectedPerson] = useState(null);

    return (
        <div className="d-flex flex-row align-items-center justify-content-around w-75">
            <img src={personne.pp} className="rounded-circle" alt="Profile" style={{ height: "56px", width: "56px" }} />
            <h3>{personne.nom}</h3>
            <h3>{personne.prenom}</h3>

        </div>
    );
};