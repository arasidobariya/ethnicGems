import "./App.css";
import Home from "./components/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import StickyFooter from "./components/Footer";
import RootLayout from "./RootLayout";
import ProductDetail from "./components/ProductDetail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: "true",
          element: <Home />,
        },
        {
          path: "/categories/:category",
          element: <ProductList />,
        },
        {
          path: "/products/:itemId",
          element: <ProductDetail />,
        },
      ],
    },
  ]);
  return (
    <RouterProvider router={router} />
    // <div className="body">
    //   <Header />

    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/categories/:category" element={<ProductList />} />
    //   </Routes>
    //   <StickyFooter />
    // </div>
  );
}

export default App;
