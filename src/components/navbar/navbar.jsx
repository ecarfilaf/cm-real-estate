import { useState } from "react";
import "./navbar.scss"
import { Link } from "react-router-dom";

function Navbar(){
	const [open,setOpen] = useState(false)
	
	const user = false;
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
				{user ? (
					<div className="user">
						<img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="User photo" />
						<span>John Doe</span>
						<Link to="/profile" className="profile">
							<div className="notification">3</div>
							<span>Profile</span>
						</Link>
					</div>
					) : (
				  	<>
					<a href="/">Sing In</a>
					<a href="/" className="register">Sing Up</a>
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
	)
}

export default Navbar;