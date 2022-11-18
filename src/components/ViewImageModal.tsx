import ImageThumbnails from "./ImageThumbnails";
import image from "../images/image-product-1.jpg";
import { ReactComponent as CloseIcon } from "../images/icon-close.svg";
import { ReactComponent as NextIcon } from "../images/icon-next.svg";
import { ReactComponent as PreviousIcon } from "../images/icon-previous.svg";

interface ViewImageModalProps {
  onCloseModal: (state: boolean) => void;
}

export default function ViewImageModal({ onCloseModal }: ViewImageModalProps) {
  return (
    <div className="modal">
      <div className="modal-content">
        <CloseIcon className="close-icon" onClick={() => onCloseModal(false)} />
        <span className="right-icon-container">
          <NextIcon className="right-icon" />
        </span>
        <span className="left-icon-container">
          <PreviousIcon className="left-icon" />
        </span>
        <div>
          <img src={image} alt="" className="current-image" />
        </div>
        <ImageThumbnails />
      </div>
    </div>
  );
}
