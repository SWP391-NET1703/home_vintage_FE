import React from "react";

import { Img, Button, SelectBox, Text } from "components";
import { useNavigate } from "react-router-dom";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

const homeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const CartNavbar = (props) => {
  const navigate = useNavigate();
  const carts = useSelector(state => state.cart.carts)

  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
          <div className="header-row ">
            <Img
              className="h-[100px] w-[100px]"
              src="images/img_logo.svg"
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
          <div className='flex items-center space-x-10 pr-10'>
            <div>
              <Button
                onClick={() => navigate("")}>
                <UserOutlined style={{ fontSize: "20px", }} />
              </Button>
            </div>
            <div className='relative'>
              <Button onClick={() => navigate("/cart")} >
                <ShoppingCartOutlined style={{ fontSize: "20px" }} />
              </Button>
              <div className='absolute h-5 w-5 bg-red-500 pt-[2px] flex justify-center items-center rounded-full text-white-A700 -top-3 -right-[9px]'>{carts.length}</div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

CartNavbar.defaultProps = {};

export default CartNavbar;
