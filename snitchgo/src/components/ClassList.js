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
        <div className="UserStyle">
          {ClassListArray.map((personne, index) => (
            <div className="UserList">
              <img key={index} src={personne.pp} className="ProfilePic"></img>
              <h3 key={index}>{personne.nom}</h3>
              <h3 key={index}>{personne.prenom}</h3>
              <button className=" btn btn-danger reportButton">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-megaphone"
                  viewBox="0 0 16 16">
                  <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-.214c-2.162-1.241-4.49-1.843-6.912-2.083l.405 2.712A1 1 0 0 1 5.51 15.1h-.548a1 1 0 0 1-.916-.599l-1.85-3.49-.202-.003A2.014 2.014 0 0 1 0 9V7a2.02 2.02 0 0 1 1.992-2.013 75 75 0 0 0 2.483-.075c3.043-.154 6.148-.849 8.525-2.199zm1 0v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0m-1 1.35c-2.344 1.205-5.209 1.842-8 2.033v4.233q.27.015.537.036c2.568.189 5.093.744 7.463 1.993zm-9 6.215v-4.13a95 95 0 0 1-1.992.052A1.02 1.02 0 0 0 1 7v2c0 .55.448 1.002 1.006 1.009A61 61 0 0 1 4 10.065m-.657.975 1.609 3.037.01.024h.548l-.002-.014-.443-2.966a68 68 0 0 0-1.722-.082z" />
                </svg>
                <div></div>
                dénoncer
              </button>
            </div>
          ))}
        </div>
      </>
    );
  };

  useEffect(() => {
    ConsoleShowUser();
  }, []);
  SortUser();

  return (
    <>
      <div className="ClassContainer">
        <ShowUser />
      </div>
    </>
  );
}
