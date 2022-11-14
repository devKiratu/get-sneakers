import React from "react";
import logo from "../images/logo.svg";
import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";

export default function Navbar() {
	return (
		<nav className="nav">
			<div className="links-left">
				<img src={logo} alt="" />
				<ul>
					<li>Collections</li>
					<li>Men</li>
					<li>Women</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
			</div>
			<div className="links-right">
				<img src={cart} alt="" />
				<img src={avatar} alt="" width={50} />
			</div>
		</nav>
	);
}
