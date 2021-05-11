import { BrowserRouter, Route } from "react-router-dom";
import { Products } from "./components/Products";
import "./App.css";
import Cart from "./components/Cart";
import Header from "./components/Header";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" exact>
        <Products />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
    </BrowserRouter>
  );
}

export default App;
