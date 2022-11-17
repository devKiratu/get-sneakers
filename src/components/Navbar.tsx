import logo from "../images/logo.svg";
import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import menuIcon from "../images/icon-menu.svg";

interface NavbarProps {
  onToggleCart: (state: boolean) => void;
  onOpenMenu: (state: boolean) => void;
  cartOpen: boolean;
}

export default function Navbar({
  onToggleCart,
  cartOpen,
  onOpenMenu,
}: NavbarProps) {
  return (
    <nav className="nav">
      <div className="links-left">
        <img
          src={menuIcon}
          alt=""
          className="menu-icon"
          onClick={() => onOpenMenu(true)}
        />
        <img src={logo} alt="" className="logo" />
        <ul>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="links-right">
        <img
          src={cart}
          alt=""
          onClick={() => onToggleCart(!cartOpen)}
          className="cart-icon"
        />
        <img src={avatar} alt="" className="avatar" />
      </div>
    </nav>
  );
}
