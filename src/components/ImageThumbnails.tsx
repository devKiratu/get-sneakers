import React from "react";
import image1 from "../images/image-product-1-thumbnail.jpg";
import image2 from "../images/image-product-2-thumbnail.jpg";
import image3 from "../images/image-product-3-thumbnail.jpg";
import image4 from "../images/image-product-4-thumbnail.jpg";

export default function ImageThumbnails() {
  return (
    <div className="thumbnails-container">
      <img src={image1} alt="" />
      <img src={image2} alt="" />
      <img src={image3} alt="" />
      <img src={image4} alt="" />
    </div>
  );
}
