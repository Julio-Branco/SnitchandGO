import "../Styles/Profile.css";

export const ProfileInfo = (props) => {
	return (
		<div className="InfoContainer">
			<div className="firstLine">
				<div className="ProfileName">nom : {props.name}</div>
				<div className="ProfilefName">prénom : {props.fName}</div>
			</div>
			<div className="secondLine">
				<div className="ProfileScore">Score : {props.score} </div>
			</div>
		</div>
	);
};
