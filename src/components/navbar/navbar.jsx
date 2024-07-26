import { useState } from "react";
import "./navbar.scss"

function Navbar(){
	const [open,setOpen] = useState(false)
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
				<a href="/">Sing In</a>
				<a href="/" className="register">Sing Up</a>
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