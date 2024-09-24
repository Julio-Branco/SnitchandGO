import "../Styles/Profile.css";
import { Navbar } from "../components/Navbar";
import { ProfileInfo } from "../components/ProfileInfo";
import data from "../Data/Data.json";

function Picture(props) {
  return (
    <img
      src={props.ProfilePic}
      alt="profile picture"
      className="ProfilePicture"
    />
  );
}
const firstperson = data.personnes[4];

function Profile() {
  return (
    <>
      <Navbar />
      <div className="profilePic">
        <img src={firstperson.pp} className="rounded-circle"></img>
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
