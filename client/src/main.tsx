import { StrictMode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishListContext.tsx";
import "react-toastify/dist/ReactToastify.css";


import Layout from "./ui/Layout.tsx";
import Category from "./pages/Category.tsx";
import Cart from "./pages/Cart.tsx";
import Orders from "./pages/Orders.tsx";
import Success from "./pages/Success.tsx";
import Cancel from "./pages/Cancel.tsx";
import NotFound from "./pages/NotFound.tsx";
import Products from "./pages/Products.tsx";
import Account from "./pages/Account.tsx";
import Wishlist from "./pages/Wishlist.tsx";
import SavedAddress from "./pages/SavedAddress.tsx";
import Cookies from "./pages/Cookies.tsx";
import Privacy from "./pages/Privacy.tsx";
import Terms from "./pages/Terms.tsx";
import Returns from "./pages/Returns.tsx";
import Delivery from "./pages/Delivery.tsx";
import Payments from "./pages/Payments.tsx";
import Warranty from "./pages/Warranty.tsx";
import LoginRegister from "./pages/LoginRegister.tsx";
import Faqs from "./pages/Faqs.tsx";
import ContactUs from "./pages/ContactUs.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import Brands from "./pages/Brands.tsx";
import Shop from "./pages/Shop.tsx";
import ProductFetcherPage from "./pages/ProductDetail.tsx";
import ProductDetail from "./pages/ProductDetail.tsx";
import { ToastContainer } from "react-toastify";





const RouterLayout = () => {
  return (
    <Layout>
      <Outlet /> 
    </Layout>
  );
};


const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouterLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/products",
        element: <Products/>,
      },
      {
        path: "products/:id",
        element: <ProductDetail />,
      },
      {
        path: "/products/base/:value",
        element: <ProductFetcherPage />,
      },

      {
        path: "/category",
        element: < Category />,
      },
      {
        path: "/category/:id",
        element: <Category />,
      },
      {
        path: "/account",
        element: <Account />,
        children: [
        
          {
            path: "login-register",
            element: <LoginRegister />,
          },
          {
            path: "orders",
            element: <Orders />,
          },
          {
            path: "saved-address",
            element: <SavedAddress />// Add SavedAddress component later
          },
        ],
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/brands",
        element: <Brands />,
      },
      {
        path: "/success",
        element: <Success />,
      },
      {
        path: "/cancel",
        element: <Cancel />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/faqs",
        element: <Faqs />,
      },
      {
        path: "/saved-address",
        element: <SavedAddress />,
      },
      {
        path: "/warranty",
        element: <Warranty />,
      },
      {
        path: "/payments",
        element: <Payments />,
      },
      {
        path: "/delivery",
        element: <Delivery />,
      },
      {
        path: "/returns",
        element: <Returns />,
      },
      {
        path: "/terms",
        element: <Terms />,
      },
      {
        path: "/privacy",
        element: <Privacy />,
      },
      {
        path: "/cookies",
        element: <Cookies />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },


      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
<QueryClientProvider client={queryClient}>
  <WishlistProvider>
    <CartProvider>
 <RouterProvider router={router} />
 <ToastContainer 
          position="top-right"
          autoClose={1500}
          newestOnTop={true}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          draggable
          theme="light"
        />
 </CartProvider>
 </WishlistProvider>
 </QueryClientProvider>
);
