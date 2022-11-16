import product from "../images/image-product-1-thumbnail.jpg";
import deleteIcon from "../images/icon-delete.svg";

export default function CartItem() {
  return (
    <div className="cart-item">
      <div className="thumbnail">
        <img src={product} alt="" />
      </div>
      <div className="text-container">
        <p>Fall Limited Edition Sneakers</p>
        <p>
          <span>$125.00 x 3</span>
          <span className="total-price">$375.00</span>
        </p>
      </div>
      <div className="delete-icon">
        <img src={deleteIcon} alt="" />
      </div>
    </div>
  );
}
