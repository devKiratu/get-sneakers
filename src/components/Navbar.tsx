import React from "react";
import logo from "../images/logo.svg";
import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";

interface NavbarProps {
  onToggleCart: (state: boolean) => void;
  cartOpen: boolean;
}

export default function Navbar({ onToggleCart, cartOpen }: NavbarProps) {
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
        <img src={cart} alt="" onClick={() => onToggleCart(!cartOpen)} />
        <img src={avatar} alt="" width={50} className="avatar" />
      </div>
    </nav>
  );
}
