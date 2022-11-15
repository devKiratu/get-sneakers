import ImageThumbnails from "./ImageThumbnails";
import image from "../images/image-product-1.jpg";
import closeIcon from "../images/icon-close.svg";
import arrowRight from "../images/icon-next.svg";
import arrowLeft from "../images/icon-previous.svg";

interface ViewImageModalProps {
  onCloseModal: (state: boolean) => void;
}

export default function ViewImageModal({ onCloseModal }: ViewImageModalProps) {
  return (
    <div className="modal">
      <div className="modal-content">
        <img
          src={closeIcon}
          alt=""
          className="close-icon"
          onClick={() => onCloseModal(false)}
        />
        <span className="right-icon">
          <img src={arrowRight} alt="" />
        </span>
        <span className="left-icon">
          <img src={arrowLeft} alt="" />
        </span>
        <div>
          <img src={image} alt="" className="current-image" />
        </div>
        <ImageThumbnails />
      </div>
    </div>
  );
}
