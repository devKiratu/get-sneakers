import { useState } from "react";
import product from "../images/image-product-1.jpg";
import { ReactComponent as Cart } from "../images/cart-icon-2.svg";
import ImageThumbnails from "./ImageThumbnails";
import ViewImageModal from "./ViewImageModal";
import arrowRight from "../images/icon-next.svg";
import arrowLeft from "../images/icon-previous.svg";

export default function ProductDetails() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      {modalOpen && <ViewImageModal onCloseModal={setModalOpen} />}
      <div className="product-details">
        <span className="right-icon">
          <img src={arrowRight} alt="" />
        </span>
        <span className="left-icon">
          <img src={arrowLeft} alt="" />
        </span>
        <div className="images-container">
          <div>
            <img
              src={product}
              alt=""
              onClick={() => setModalOpen(true)}
              className="main-image"
            />
          </div>
          <ImageThumbnails />
        </div>
        <div className="product-description">
          <p className="company-name">sneaker company</p>
          <h1>Fall Limited Edition Sneakers</h1>
          <p className="description-text">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
          <div className="price-container">
            <div className="current-price">
              <h2>$125.00</h2>
              <p className="discount-badge">50%</p>
            </div>
            <p className="old-price">$250.00</p>
          </div>
          <div className="buttons-container">
            <div className="change-item-count">
              <button className="btn-minus">-</button>
              <p className="item-count">0</p>
              <button className="btn-plus">+</button>
            </div>
            <button className="add-to-cart">
              <Cart fill="white" stroke="white" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
