import { useContext, useState } from "react";
import "./navbar.scss"
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Navbar(){
	const [open,setOpen] = useState(false)
		
	const { currentUser } = useContext(AuthContext);

	return (
		<nav>
			<div className="left">
				<a href="/" className="logo">
					<img src="/img/logo.png" alt="logo"></img>
					<span>CM Real State</span>
				</a>
				<a href="/">Home</a>
				<a href="/">About</a>
				<a href="/">Contact</a>
				<a href="/">Agents</a>
			</div>
			<div className="right">
				{currentUser ? (
					<div className="user">
						<img src={currentUser.avatar || '/img/noavatar.jpg'} alt="User photo" />
						<span>{currentUser.username}</span>
						<Link to="/profile" className="profile">
							<div className="notification">3</div>
							<span>Profile</span>
						</Link>
					</div>
					) : (
				  	<>
					<a href="/login">Sing In</a>
					<a href="/register" className="register">Sing Up</a>
					</>
				)}
				<div className="menuIcon">
					<img src="/img/menu.png" alt="Menu Icon" onClick={() => setOpen((prev) => !prev)}></img>
				</div>
				<div className={open ? "menu active" : "menu"}>
					<a href="/">Home</a>
					<a href="/">About</a>
					<a href="/">Contact</a>
					<a href="/">Agents</a>
					<a href="/">Sign In</a>
					<a href="/">Sign Up</a>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;