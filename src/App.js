import "./App.css";
import Home from "./components/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductList from "./components/ProductList";
import RootLayout from "./RootLayout";
import ProductDetail from "./components/ProductDetail";
import AddToCart from "./components/AddToCart";
import SignUp from "./components/Signup";
import CheckoutMain from "./components/CheckoutMain";
import Checkout from "./components/checkout/Checkout";

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
        {
          path: "/AddToCart",
          element: <AddToCart />,
        },
        {
          path: "/SignInOrGuestCheckout",
          element: <CheckoutMain />,
        },
        {
          path: "/checkout",
          element: <Checkout />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
