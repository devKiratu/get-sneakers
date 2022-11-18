import logo from "../images/logo.svg";
import avatar from "../images/image-avatar.png";
import { ReactComponent as MenuIcon } from "../images/icon-menu.svg";
import { ReactComponent as CartIcon } from "../images/icon-cart.svg";

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
        <MenuIcon className="menu-icon" onClick={() => onOpenMenu(true)} />
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
        <CartIcon
          className="cart-icon"
          onClick={() => onToggleCart(!cartOpen)}
        />
        <img src={avatar} alt="" className="avatar" />
      </div>
    </nav>
  );
}
