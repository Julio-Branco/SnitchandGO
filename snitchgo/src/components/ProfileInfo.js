import "../Styles/Profile.css";

export const ProfileInfo = (props) => {
  return (
    <div className="InfoContainer">
      <div className="firstLine">
        <div className="ProfileName">{props.name}</div>
        <div className="ProfilefName">{props.fName}</div>
      </div>
      <div className="secondLine">
        <div className="ProfileScore">{props.score} </div>
        <div className="ProfileReport"></div>
      </div>
    </div>
  );
};
