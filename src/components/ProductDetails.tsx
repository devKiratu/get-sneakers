import { useEffect, useState } from "react";
import { ReactComponent as CartIcon } from "../images/icon-cart.svg";
import ImageThumbnails from "./ImageThumbnails";
import ViewImageModal from "./ViewImageModal";
import { ReactComponent as NextIcon } from "../images/icon-next.svg";
import { ReactComponent as PreviousIcon } from "../images/icon-previous.svg";
import sneakerData, { Image } from "../data";
import { ProductData } from "../data";

export default function ProductDetails() {
  const [modalOpen, setModalOpen] = useState(false);
  const [sneaker, setSneaker] = useState<ProductData>();
  const [currentImage, setCurrentImage] = useState<Image>();

  const loadSneaker = () => {
    setSneaker(sneakerData);
    setCurrentImage(sneakerData.images[0]);
  };

  const updateCurrentImage = (img: Image) => {
    setCurrentImage(img);
  };

  const updateCarouselForward = () => {
    if (sneaker) {
      const images = sneaker?.images;
      const index = images.findIndex((image) => image.id === currentImage?.id);
      if (index < images.length - 1) {
        updateCurrentImage(images[index + 1]);
      } else {
        updateCurrentImage(images[0]);
      }
    }
  };

  const updateCarouselBack = () => {
    if (sneaker) {
      const images = sneaker?.images;
      const index = images.findIndex((image) => image.id === currentImage?.id);
      if (index > 0) {
        updateCurrentImage(images[index - 1]);
      } else {
        updateCurrentImage(images[images.length - 1]);
      }
    }
  };

  useEffect(() => {
    loadSneaker();
  }, []);

  if (!sneaker || !currentImage) return null;

  return (
    <>
      {modalOpen && (
        <ViewImageModal
          currentImage={currentImage}
          images={sneaker.images}
          onCloseModal={setModalOpen}
          onUpdateImage={updateCurrentImage}
          onUpdateCarouselForward={updateCarouselForward}
          onUpdateCarouselBack={updateCarouselBack}
        />
      )}
      <div className="product-details">
        <span className="right-icon" onClick={updateCarouselForward}>
          <NextIcon className="icon" />
        </span>
        <span className="left-icon" onClick={updateCarouselForward}>
          <PreviousIcon className="icon" />
        </span>
        <div className="images-container">
          <div>
            <img
              src={currentImage.imageUri}
              alt=""
              onClick={() => setModalOpen(true)}
              className="main-image"
            />
          </div>
          <ImageThumbnails
            currentImage={currentImage}
            images={sneaker.images}
            onUpdateImage={updateCurrentImage}
          />
        </div>
        <div className="product-description">
          <p className="company-name">{sneaker.maker}</p>
          <h1>{sneaker.title}</h1>
          <p className="description-text">{sneaker.description}</p>
          <div className="price-container">
            <div className="current-price">
              <h2>{sneaker.price}</h2>
              <p className="discount-badge">{sneaker?.discount}</p>
            </div>
            <p className="old-price">{sneaker?.oldPrice}</p>
          </div>
          <div className="buttons-container">
            <div className="change-item-count">
              <button className="btn-minus">-</button>
              <p className="item-count">0</p>
              <button className="btn-plus">+</button>
            </div>
            <button className="add-to-cart">
              <CartIcon className="cart-icon" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
