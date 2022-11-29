import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function Cart() {
  const { products } = useSelector((state: RootState) => state.cart);

  const items = Object.values(products);

  const isEmpty = items.length < 1;

  return (
    <div className="cart">
      <header>
        <h4>Cart</h4>
      </header>
      <hr className="line" />
      <div className="cart-items">
        {isEmpty && (
          <div className="empty-cart">
            <p>Your cart is empty.</p>
          </div>
        )}
        {!isEmpty && (
          <>
            {items.map((product) => (
              <CartItem
                id={product.id}
                image={product.images[0].imageUri}
                price={product.price}
                title={product.title}
                count={product.count}
                key={product.id}
              />
            ))}
            <button>Checkout</button>
          </>
        )}
      </div>
    </div>
  );
}
