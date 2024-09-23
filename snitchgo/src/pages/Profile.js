import "../Styles/Profile.css";

const user = {
  name: "test",
  score: 99,
};

function Profile() {
  return (
    <>
      <h1>Bienvenue {user.name} </h1>
      <h2>votre score est de {user.score}</h2>
    </>
  );
}

export default Profile;
