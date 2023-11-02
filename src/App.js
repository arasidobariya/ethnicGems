import "./App.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import StickyFooter from "./components/Footer";
import ProductDetail from "./components/ProductDetail";
function App() {
  return (
    <div className="body">
      <Header />
      <ProductDetail/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductList />} />
      </Routes>
      <StickyFooter />
    </div>
  );
}

export default App;
