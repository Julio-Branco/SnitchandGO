import { useEffect } from "react";
import data from "../Data/Data.json";
import "../Styles/Class.css";

const ClassListArray = [];

export default function ClassList() {
  const SortUser = () => {
    if (ClassListArray.length === 0) {
      for (let i = 0; i < data.personnes.length; i++) {
        ClassListArray.push(data.personnes[i]);
      }
    }
  };

  const ConsoleShowUser = () => {
    console.log(ClassListArray);
  };

  const ShowUser = () => {
    return (
      <>
        {ClassListArray.map((personne, index) => (
          <div className="UserList">
            <h3 key={index}>{personne.nom}</h3>
            <h3 key={index}>{personne.prenom}</h3>
            <h3 key={index}>{personne.score}</h3>
          </div>
        ))}
      </>
    );
  };

  useEffect(() => {
    SortUser();
    ConsoleShowUser();
  }, []);

  return (
    <>
      <div className="ClassContainer">
        <ShowUser />
      </div>
    </>
  );
}
