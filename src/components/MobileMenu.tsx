import closeIcon from "../images/icon-close.svg";

interface MobileMenuProps {
  onCloseMenu: (state: boolean) => void;
}

export default function MobileMenu({ onCloseMenu }: MobileMenuProps) {
  return (
    <div className="menu-container">
      <div className="menu-content">
        <img src={closeIcon} alt="" onClick={() => onCloseMenu(false)} />
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
