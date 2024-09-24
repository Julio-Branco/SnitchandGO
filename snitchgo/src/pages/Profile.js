import "../Styles/Profile.css";
import Nav from "../components/Navbar";
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
const firstperson = data.personnes[0];

function Profile() {
  return (
    <>
      <div className="profilePic">
        <img src={firstperson.pp} className="rounded-circle"></img>
      </div>
    </>
  );
}

export default Profile;
