import { ReactComponent as CloseIcon } from "../images/icon-close.svg";

interface MobileMenuProps {
  onCloseMenu: (state: boolean) => void;
}

export default function MobileMenu({ onCloseMenu }: MobileMenuProps) {
  return (
    <div className="menu-container">
      <div className="menu-content">
        <CloseIcon onClick={() => onCloseMenu(false)} className="close-icon" />
        <ul>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}
