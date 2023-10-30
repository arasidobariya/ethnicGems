import "./App.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
function App() {
  return (
    <div className="body">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductList />} />
      </Routes>
    </div>
  );
}

export default App;
