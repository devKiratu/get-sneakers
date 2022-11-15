import React from "react";
import product from "../images/image-product-1.jpg";
import { ReactComponent as Cart } from "../images/cart-icon-2.svg";
import ImageThumbnails from "./ImageThumbnails";

export default function ProductDetails() {
  return (
    <div className="product-details">
      <div className="main-image">
        <div>
          <img src={product} alt="" />
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
        <h2>
          $125.00 <span className="discount-badge">50%</span>
        </h2>

        <p className="old-price">$250.00</p>
        <div>
          <button className="btn-minus">-</button>
          <span className="item-count">0</span>
          <button className="btn-plus">+</button>
          <button className="add-to-cart">
            <Cart fill="white" stroke="white" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
