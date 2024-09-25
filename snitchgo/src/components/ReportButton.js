import React, { useState } from 'react';
import data from '../Data/Data.json'; 

export default function ReportButton() {
    const [isFormVisible, setIsFormVisible] = useState(false);
    
    return (
        <div style={{ marginTop: '55px' }}>
            <img
                src={"/img/ReportButton.png"}
                alt="Report Button"
                style={{ cursor: 'pointer', width: '100px', height: '100px' }}
                data-bs-toggle="modal"
                data-bs-target="#ModalReportPopup"
            />
            <div
                className="modal fade"
                id="ModalReportPopup"
                tabIndex="-1"
                aria-labelledby="profileModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="profileModalLabel">
                                Balance ton collègue
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <select id="personSelect" className="form-control">
                                <option disabled selected value="">Choisis l'élève</option>
                                {data.personnes.map(person => (
                                    <option key={person.id} value={person.id}>
                                        {person.prenom} {person.nom}
                                    </option>
                                ))}
                            </select>
                            <input className="form-control mt-2" id="exampleFormControlInput1" placeholder="Matière" />
                            <h5 style={{ color: "gray" }}>Raison :</h5>
                            <div className="radioButtonReport">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="radioDenonce" id="radioRetard" value="R" />
                                    <label className="form-check-label" htmlFor="radioRetard">Retard</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="radioDenonce" id="radioAbsent" value="A" />
                                    <label className="form-check-label" htmlFor="radioAbsent">Absence</label>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                                style={{ backgroundColor: "green" }}
                            >
                                Valider
                            </button>
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Fermer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
