import "../Styles/Profile.css";
import Nav from "../components/Navbar";

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
      <div className="profilePic"> </div>
    </>
  );
}

export default Profile;
