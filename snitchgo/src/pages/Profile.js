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

function Profile() {
  return (
    <>
      <div className="profilePic">
        <Picture ProfilePic={} />
      </div>
    </>
  );
}

export default Profile;
