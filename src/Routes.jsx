import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";
import { QueryClient, QueryClientProvider } from "react-query";
import Header from "components/Header";
import Footer from "components/Footer";
import { ToastContainer } from "react-toastify";
import Home from "pages/Homepage";
const LoginPage = React.lazy(() => import("pages/Login"));
const Aboutus = React.lazy(() => import("pages/Aboutus"));
const Contactus = React.lazy(() => import("pages/Contactus"));
const BlogDetail = React.lazy(() => import("pages/BlogDetail"));
const Blog = React.lazy(() => import("pages/Blog"));
const Team = React.lazy(() => import("pages/Team"));
const Wishlist = React.lazy(() => import("pages/Wishlist"));
const Checkout = React.lazy(() => import("pages/Checkout"));
const DetailReview = React.lazy(() => import("pages/DetailReview"));
const SingUp = React.lazy(() => import("pages/SignUp"));

const ShopDetailDescription = React.lazy(
  () => import("pages/ShopDetailDescription"),
);
const Shop = React.lazy(() => import("pages/Shop"));
const Homepage = React.lazy(() => import("pages/Homepage"));
const Cart = React.lazy(() => import("pages/Cart"));

const queryClient = new QueryClient()
const Layout =()=>{
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
      <Header/>
      <Footer/>
    </div>
  )
};
const ProjectRoutes = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <React.Suspense fallback={<>Loading...</>}>
        <Router>
          <Routes>
            <Route path="/" element={< Home/>} />
            <Route path="*" element={<NotFound />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/shop" element={<Shop />} />
            <Route
              path="/shopdetaildescription/:productId"
              element={<ShopDetailDescription />}
            />
            <Route path="/detailreview" element={<DetailReview />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/team" element={<Team />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blogdetail" element={<BlogDetail />} />
            <Route path="/contactus" element={<Contactus />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/signup" element={<SingUp />} />

          </Routes>
        </Router>
      </React.Suspense>
    </QueryClientProvider>
  );
};
export default ProjectRoutes;
