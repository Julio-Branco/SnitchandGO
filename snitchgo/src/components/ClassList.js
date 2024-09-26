import { useEffect, useState } from "react";
import ReportButton from "./ReportButton";
import { ShowUser } from "./ShowUser";
import { getPersonnes } from "../api/personnes";

export default function ClassList() {
  const [personnes, setPersonnes] = useState([]); // Initialize as an empty array

  useEffect(() => {
    const fetchPersonnes = async () => {
      const fetchedPersonnes = await getPersonnes();
      setPersonnes(fetchedPersonnes);
    };
    fetchPersonnes();
  }, []);

  return (
    <div className="d-flex flex-column align-items-center">
      {personnes.map((personne, index) => (
        <div className="d-flex  rounded my-2 shadow flex-row" key={index} style={{background: "#D9D9D9", width: "55vh"}}>
          <ShowUser personne={personne} />
          <ReportButton key={personne.id} fullName={`${personne.prenom} ${personne.nom}`} index={personne.id}/>
          {console.log(personne.id)}
        </div>
      ))}
    </div>
  );
}
