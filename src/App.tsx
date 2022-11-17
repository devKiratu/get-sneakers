import { useState } from "react";
import Cart from "./components/Cart";
import MobileMenu from "./components/MobileMenu";
import Navbar from "./components/Navbar";
import ProductDetails from "./components/ProductDetails";

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      {menuOpen && <MobileMenu onCloseMenu={setMenuOpen} />}
      <Navbar
        onToggleCart={setCartOpen}
        cartOpen={cartOpen}
        onOpenMenu={setMenuOpen}
      />
      {cartOpen && <Cart />}
      <ProductDetails />
    </div>
  );
}

export default App;
