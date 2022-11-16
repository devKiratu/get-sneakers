import { useState } from "react";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import ProductDetails from "./components/ProductDetails";

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <div>
      <Navbar onToggleCart={setCartOpen} cartOpen={cartOpen} />
      {cartOpen && <Cart />}
      <ProductDetails />
    </div>
  );
}

export default App;
