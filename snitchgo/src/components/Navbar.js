import { ReactComponent as Logo } from "../logo.svg";
import "../Styles/style.css";
import { NavLink, useLocation } from "react-router-dom";

export const Navbar = () => {
	const location = useLocation();
	return (
		<div
			className="navbar navbar-expand-lg navbar-light"
			style={{ background: "#EAEAEB", height: "11vh" }}
		>
			<div className="flex flex-row mx-3">
				<a className="navbar-brand flex w-100 justify-content-between" href="/">
					<Logo className="mx-3" style={{ width: "45px" }} />
					<b>Snitch and Go</b>
				</a>
			</div>

			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>

			<div
				className="ms-3 collapse navbar-collapse"
				id="navbarSupportedContent"
			>
				<ul className="navbar-nav ps-1 w-100 align-items-start">
					<li
						className={`nav-item ${
							(location.pathname === "/Home") | "/" ? "active" : ""
						}`}
					>
						<NavLink className="nav-link my-link" to="/Home">
							Home
						</NavLink>
					</li>
					<li
						className={`nav-item ${
							location.pathname === "/Classe" ? "active" : ""
						}`}
					>
						<NavLink className="nav-link my-link" to="/Classe">
							Ma classe
						</NavLink>
					</li>
					<li
						className={`nav-item ${
							location.pathname === "/Leaderboardrank" ? "active" : ""
						}`}
					>
						<NavLink className="nav-link my-link" to="/Leaderboardrank">
							Leaderboard
						</NavLink>
					</li>
				</ul>
				<div className="me-4">
					<button
						type="button"
						data-toggle="modal"
						data-target="/Profile"
						className="profilebutton"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="40"
							height="40"
							fill="#F7CF38"
							className="bi bi-person-circle"
							viewBox="0 0 16 16"
						>
							<path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
							<path
								fillRule="evenodd"
								d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
};
