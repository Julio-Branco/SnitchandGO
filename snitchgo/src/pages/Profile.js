import "../Styles/Profile.css";
import { ProfileInfo } from "../components/ProfileInfo";
import data from "../Data/Data.json";

function GetUserID(id) {
  return data.personnes[id];
}

function Profile(props) {
  const firstperson = GetUserID(props.id);
  return (
    <>
      <div className="profilePic">
        <img
          src={firstperson.pp}
          className="rounded-circle"
          alt="profile pic"></img>
      </div>
      <ProfileInfo
        name={firstperson.nom}
        fName={firstperson.prenom}
        score={firstperson.score}
      />
    </>
  );
}

export default Profile;
