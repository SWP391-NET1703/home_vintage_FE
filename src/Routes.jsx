import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";
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
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<Shop />} />
          <Route
            path="/shopdetaildescription/:_id"
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
  );
};
export default ProjectRoutes;
