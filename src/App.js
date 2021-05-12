import { BrowserRouter, Route } from "react-router-dom";
import { Products } from "./components/Products";
import "./App.css";
import Header from "./components/Header";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" exact>
        <Products />
      </Route>
    </BrowserRouter>
  );
}

export default App;
