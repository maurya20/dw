import { BrowserRouter, Route } from "react-router-dom";
import { Products } from "./components/Products";
import "./App.css";
import Header from "./components/Header";
import Crud from "./components/Crud";
function App() {
  return (
    <BrowserRouter>
      <Crud />
      {/* <Header />
      <Route path="/" exact>
        <Products />
      </Route> */}
    </BrowserRouter>
  );
}

export default App;
