import CartItem from "./CartItem";

export default function Cart() {
  const isEmpty = !true;
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
            <CartItem />
            <button>Checkout</button>
          </>
        )}
      </div>
    </div>
  );
}
