import ImageThumbnails from "./ImageThumbnails";
import { ReactComponent as CloseIcon } from "../images/icon-close.svg";
import { ReactComponent as NextIcon } from "../images/icon-next.svg";
import { ReactComponent as PreviousIcon } from "../images/icon-previous.svg";
import { Image } from "../data";

interface ViewImageModalProps {
  onCloseModal: (state: boolean) => void;
  images: Image[];
  currentImage: Image;
  onUpdateImage: (image: Image) => void;
  onUpdateCarouselForward: () => void;
  onUpdateCarouselBack: () => void;
}

export default function ViewImageModal({
  onCloseModal,
  images,
  currentImage,
  onUpdateImage,
  onUpdateCarouselBack,
  onUpdateCarouselForward,
}: ViewImageModalProps) {
  return (
    <div className="modal">
      <div className="modal-content">
        <CloseIcon className="close-icon" onClick={() => onCloseModal(false)} />
        <span
          className="right-icon-container"
          onClick={() => onUpdateCarouselForward()}
        >
          <NextIcon className="right-icon" />
        </span>
        <span
          className="left-icon-container"
          onClick={() => onUpdateCarouselBack()}
        >
          <PreviousIcon className="left-icon" />
        </span>
        <div>
          <img src={currentImage.imageUri} alt="" className="current-image" />
        </div>
        <ImageThumbnails
          onUpdateImage={onUpdateImage}
          currentImage={currentImage}
          images={images}
        />
      </div>
    </div>
  );
}
