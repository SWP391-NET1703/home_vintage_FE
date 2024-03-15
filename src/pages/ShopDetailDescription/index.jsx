import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  PagerIndicator,
  SelectBox,
  Slider,
  Text,
} from "components";
import CartColumnframe48095972 from "components/CartColumnframe48095972";
import CartNavbar from "components/CartNavbar";
import CartSectionfooter from "components/CartSectionfooter";

import { useDispatch } from "react-redux";
import { useQuery } from "react-query";
import { getListProductDetail } from "services/product/getListProductDetail";
import { addToCart } from "store/slice/CartSlice";

const ShopDetailDescription = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const { productId } = useParams();

  const { data } = useQuery({
    queryKey: ["product"],
    queryFn: () => getListProductDetail(productId),
  });

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-rubik sm:gap-10 md:gap-10 gap-[100px] items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <CartNavbar className="bg-white-A700 flex items-center justify-center md:px-5 px-[75px] py-[35px] w-full" />
          <div className="flex flex-col items-start justify-start pt-[75px] md:px-10 sm:px-5 px-[75px] w-full">
            <div className="flex md:flex-col flex-row gap-[47px] items-center justify-start max-w-[1290px] mx-auto w-full">
              <Img
                className="flex-1 md:flex-none md:h-[595px] sm:h-auto h-full max-h-[595px] object-cover sm:w-[] md:w-[]"
                src={data?.interior.images[0]}
                alt={data?.interior.images[1]}
              />
              <div className="flex flex-1 flex-col gap-[30px] items-start justify-start w-full">
                <div className="flex flex-col gap-[33px] items-start justify-start w-full">
                  <Text
                    className="max-w-[621px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-black-900 tracking-[-0.50px]"
                    size="txtRalewayRomanBold32Black900"
                  >
                    {data?.interior.interior_name}
                  </Text>
                  <div className="flex flex-row font-rubik gap-[15px] items-center justify-start w-full">
                    <Img
                      className="h-5 w-[140px]"
                      src="../images/img_frame135.svg"
                      alt="frame135"
                    />
                    <Text
                      className="text-gray-500 text-sm tracking-[-0.50px] w-auto"
                      size="txtRubikRegular14"
                    >
                      ( 1 review )
                    </Text>
                  </div>
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-bluegray-900 tracking-[-0.50px] w-full"
                    size="txtRubikBold36"
                  >
                    {data?.interior.price} VND
                  </Text>
                  <div className="flex flex-col font-rubik gap-5 items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-lg tracking-[-0.50px] w-full"
                      size="txtRubikSemiBold18"
                    >
                      <span className="text-gray-500 font-rubik text-left font-normal">
                        Stock : {data?.interior.quantity}
                      </span>
                    </Text>

                    <Text
                      className="text-black-900 text-lg tracking-[-0.50px] w-full"
                      size="txtRubikSemiBold18"
                    >
                      <span className="text-gray-500 font-rubik text-left font-normal">
                        Categories :{" "}
                        {data?.interior.category_detail.category_name}
                      </span>
                    </Text>
                    <Text
                      className="text-black-900 text-lg tracking-[-0.50px] w-full"
                      size="txtRubikSemiBold18"
                    >
                      <span className="text-gray-500 font-rubik text-left font-normal">
                        Material : {data?.interior.material}
                      </span>
                    </Text>
                    <Text
                      className="text-black-900 text-lg tracking-[-0.50px] w-full"
                      size="txtRubikSemiBold18"
                    >
                      <span className="text-gray-500 font-rubik text-left font-normal">
                        Size : {data?.interior.size}
                      </span>
                    </Text>
                    <Text
                      className="text-black-900 text-lg tracking-[-0.50px] w-full"
                      size="txtRubikSemiBold18"
                    >
                      <span className="text-gray-500 font-rubik text-left font-normal">
                        Color : {data?.interior.color}
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-row gap-[19px] items-start justify-start w-[337px]">
                    <Button
                      className="border-2 border-bluegray-900 border-solid cursor-pointer font-medium leading-[normal] min-w-[155px] py-[13px] text-base text-bluegray-900 text-center tracking-[-0.50px]"
                      size="txtRubikRegular18WhiteA700"
                      onClick={() =>
                        dispatch(
                          addToCart({
                            _id: productId,
                            name: data?.interior.interior_name,
                            quantity: 1,
                            image: data?.interior.images,
                            size: data?.interior.size,
                            price: data?.interior.price,
                            colors: data?.interior.color,
                          })
                        )
                      }
                    >
                      Add to Cart
                    </Button>
                    <Button className="border border-bluegray-100 border-solid flex h-[43px] items-center justify-center p-3 w-[43px]">
                      <Img src="../images/img_favorite.svg" alt="favorite" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-poppins items-start justify-start md:px-10 sm:px-5 px-[75px] w-full">
          <div className="flex md:flex-col flex-row gap-[49px] items-end justify-start max-w-[1290px] mx-auto w-full">
            <div className="flex flex-1 flex-col gap-[42px] items-start justify-start w-full">
              <div className="flex flex-row font-josefinsans gap-[50px] items-start justify-start w-full">
                <div className="flex flex-col gap-2 items-end justify-start w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-bluegray-900 sm:text-xl tracking-[-0.50px] w-auto"
                    size="txtJosefinSansRomanBold24"
                  >
                    Description
                  </Text>
                  <Line className="bg-bluegray-900 h-1.5 w-full" />
                </div>
                <Text
                  className="common-pointer text-2xl md:text-[22px] text-gray-500 sm:text-xl tracking-[-0.50px] w-auto"
                  size="txtJosefinSansRomanBold24Gray500"
                  onClick={() => navigate("/detailreview")}
                >
                  Review
                </Text>
              </div>
              <Text
                className="leading-[35.00px] text-base text-gray-500 tracking-[-0.50px]"
                size="txtRubikRegular16"
              >
                <>{data?.interior.description}</>
              </Text>
            </div>
            <div className="flex flex-1 flex-col gap-[21px] items-center justify-start w-full">
              <div className="bg-gray-53 flex flex-col items-start justify-start md:px-10 sm:px-5 px-[43px] py-6 w-full">
                <div className="flex sm:flex-col flex-row gap-[42px] items-start justify-start w-full">
                  <div className="flex flex-1 flex-col gap-[23px] items-start justify-start w-full">
                    <div className="flex flex-col gap-[31px] items-start justify-start w-full">
                      <Text
                        className="text-bluegray-900 text-lg tracking-[-0.50px] w-full"
                        size="txtRubikRegular18Bluegray900"
                      >
                        Living Room
                      </Text>
                      <Text
                        className="max-w-[313px] md:max-w-full text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[-0.50px]"
                        size="txtRalewayBold36Black900"
                      >
                        The best foam padded chair
                      </Text>
                    </div>
                    <Button className="border-2 border-bluegray-900 border-solid cursor-pointer font-medium leading-[normal] min-w-[155px] py-[13px] text-base text-bluegray-900 text-center tracking-[-0.50px]">
                      Shop Now
                    </Button>
                  </div>
                  <Img
                    className="h-[301px] md:h-auto max-h-[301px] object-cover sm:w-[]"
                    src="../images/img_sammoghadamkh.png"
                    alt="sammoghadamkh"
                  />
                </div>
              </div>
              <PagerIndicator
                className="flex h-[15px] justify-center w-[75px]"
                count={3}
                activeCss="inline-block cursor-pointer rounded-[50%] h-[15px] bg-bluegray-900 w-[15px]"
                activeIndex={1}
                inactiveCss="inline-block cursor-pointer rounded-[50%] h-[15px] bg-gray-200 w-[15px]"
                selectedWrapperCss="inline-block md:ml-[0] mx-[7.50px] sm:ml-[0]"
                unselectedWrapperCss="inline-block md:ml-[0] mx-[7.50px] sm:ml-[0]"
              />
            </div>
          </div>
        </div>

        <CartSectionfooter className="bg-black-2 text-white flex font-raleway gap-2 items-center justify-center md:px-5 px-[75px] py-[50px] w-full" />
      </div>
    </>
  );
};

export default ShopDetailDescription;
