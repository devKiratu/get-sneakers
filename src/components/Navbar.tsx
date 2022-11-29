import logo from "../images/logo.svg";
import avatar from "../images/image-avatar.png";
import { ReactComponent as MenuIcon } from "../images/icon-menu.svg";
import { ReactComponent as CartIcon } from "../images/icon-cart.svg";
import { RootState } from "../store";
import { useSelector } from "react-redux";

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
  const items = useSelector((state: RootState) => state.cart.totalItems);

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
        <div className="cart-container">
          {items > 0 && <span className="cart-items">{items}</span>}
          <CartIcon
            className="cart-icon"
            onClick={() => onToggleCart(!cartOpen)}
          />
        </div>
        <img src={avatar} alt="" className="avatar" />
      </div>
    </nav>
  );
}
