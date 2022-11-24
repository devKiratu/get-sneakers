import image1 from "../images/image-product-1-thumbnail.jpg";
import image2 from "../images/image-product-2-thumbnail.jpg";
import image3 from "../images/image-product-3-thumbnail.jpg";
import image4 from "../images/image-product-4-thumbnail.jpg";

export default function ImageThumbnails() {
  return (
    <div className="thumbnails-container">
      <span>
        <img src={image1} alt="" />
      </span>
      <span>
        <img src={image2} alt="" />
      </span>
      <span>
        <img src={image3} alt="" />
      </span>
      <span>
        <img src={image4} alt="" />
      </span>
    </div>
  );
}
