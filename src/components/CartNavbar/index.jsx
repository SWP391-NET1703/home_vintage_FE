import React from "react";

import { Img, Button, SelectBox, Text } from "components";
import { useNavigate } from "react-router-dom";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
const homeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const CartNavbar = (props) => {
  const navigate = useNavigate();
  const products = useSelector((state) => state.cart.products);
  console.log("products", products);
  return (
    <>
      <div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
          <div className="header-row ">
            <Img
              className="h-[100px] w-[100px]"
              src="../images/img_logo.svg"
              alt="logo"
            />
            <div className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="flex sm:flex-1 flex-row gap-9 sm:hidden items-center justify-between w-[498px] sm:w-full">
            <Button
              className="text-black-900 text-lg tracking-[-0.50px] w-auto"
              size="txtRubikRomanRegular18"
              onClick={() => navigate("/")}
            >
              Home
            </Button>
            <Button
              className="text-black-900 text-lg tracking-[-0.50px] w-auto"
              size="txtRubikRomanRegular18"
              onClick={() => navigate("/shop")}
            >
              Shop
            </Button>
            <Button
              className="text-black-900 text-lg tracking-[-0.50px] w-auto"
              size="txtRubikRomanRegular18"
              onClick={() => navigate("/blog")}
            >
              Blog
            </Button>
            <Button
              className="text-black-900 text-lg tracking-[-0.50px] w-auto"
              size="txtRubikRomanRegular18"
              onClick={() => navigate("/aboutus")}
            >
              About
            </Button>
            <Button
              className="text-black-900 text-lg tracking-[-0.50px] w-auto"
              size="txtRubikRomanRegular18"
              onClick={() => navigate("/contactus")}
            >
              Contact
            </Button>
          </div>
          <div>
            <Button onClick={() => navigate("/login")}>
              <UserOutlined style={{ fontSize: "20px", margin: "20px" }} />
            </Button>
            <Button onClick={() => navigate("/cart")}>
              <div style={{ position: "relative" }}>
                <ShoppingCartOutlined style={{ fontSize: "20px" }} />
                <span className="absolute font-titleFont top-3 -right-2 text-lg w-6 h-6 flex items-center justify-center rounded-full bg-primeColor text-black">
                  {products.length > 0 ? products.length : 0}
                </span>
              </div>
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

CartNavbar.defaultProps = {};

export default CartNavbar;
