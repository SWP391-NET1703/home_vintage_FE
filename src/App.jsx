import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
  ScrollRestoration,
} from "react-router-dom";
import Header from "components/Header";
import Footer from "components/Footer";
import { ToastContainer } from "react-toastify";
import HeaderBottom from "components/HeaderBottom";
import Home from "pages/Homepage";
import "react-toastify/dist/ReactToastify.css";
import ProjectRoutes from "Routes";

const Layout = () => {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Header />
      <HeaderBottom />
      {/* <SpecialCase /> */}
      {/* <ScrollRestoration /> */}
      {/* <Outlet /> */}
      <Footer />
      {/* <FooterBottom /> */}
    </div>
  );
};
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        {/* ==================== Header Navlink Start here =================== */}
        <Route index element={<Home />}></Route>
        {/* <Route path="/shop" element={<Shop />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/journal" element={<Journal />}></Route> */}
        {/* ==================== Header Navlink End here =====================
        {/* <Route path="/category/:category" element={<Offer />}></Route>
        <Route path="/product/:_id" element={<ProductDetails />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/paymentgateway" element={<Payment />}></Route> */} 
      </Route>
      {/* <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/signin" element={<SignIn />}></Route> */}
    </Route>
  )
);

// function App() {
//   return (
//     <div className="font-bodyFont">
//       <ProjectRoutes />
//     </div>
//   );
// }
// export default App;
