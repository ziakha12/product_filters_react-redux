import Cart from "./components/Cart";
import Products from "./components/Products";
import "./App.css";
import CartOpenbutton from "./components/CartOpenbutton";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App relative">
      <Hero />
      <Cart />
      <CartOpenbutton />
      <Products />
    </div>
  );
}

export default App;
