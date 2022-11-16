import React from "react";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div>
      <Navbar />
      {true && <Cart />}
      <ProductDetails />
    </div>
  );
}

export default App;
