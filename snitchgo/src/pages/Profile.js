import "../Styles/Profile.css";
import Nav from "../components/Navbar";
import data from "../../public/Data.json";

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
      <div className="profilePic"></div>
    </>
  );
}

export default Profile;
