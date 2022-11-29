import { ReactComponent as DeleteIcon } from "../images/icon-delete.svg";
import { useDispatch } from "react-redux";
import { deletedProduct } from "../store/cart";

interface CartItemProps {
  image: string;
  title: string;
  price: string;
  count: number;
  id: string;
}

export default function CartItem({
  image,
  title,
  price,
  count,
  id,
}: CartItemProps) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <div className="thumbnail">
        <img src={image} alt="" />
      </div>
      <div className="text-container">
        <p>{title}</p>
        <p>
          <span>{`${price} x ${count}`}</span>
          <span className="total-price">$375.00</span>
        </p>
      </div>
      <div className="delete-icon-container">
        <DeleteIcon
          className="delete-icon"
          onClick={() => dispatch(deletedProduct(id))}
        />
      </div>
    </div>
  );
}
