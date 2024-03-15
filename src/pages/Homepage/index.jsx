import React from "react";

import { useNavigate } from "react-router-dom";

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
import HomepageCardblog from "components/HomepageCardblog";
import CardProduct from "components/CardProduct";
import { useQuery } from "react-query";
import { getListProduct } from "services/product/getListProduct";
import Loading from "components/LoadingError/Loading";
import Message from "components/LoadingError/Error";

const homeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const HomepagePage = () => {
  const navigate = useNavigate();

  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);
  const homepageCardproductPropList = [
    { save: "" },
    { image: "images/img_image_7.png" },
    { image: "images/img_image_8.png" },
    { image: "images/img_image_9.png" },
    { image: "images/img_image_10.png" },
    { image: "images/img_image_11.png" },
    { image: "images/img_image_12.png" },
    { image: "images/img_image_13.png" },
  ];
  const homepageCardblogPropList = [
    {},
    { rectangleeighteen: "images/img_rectangle18_400x416.png" },
    { rectangleeighteen: "images/img_rectangle18_1.png" },
  ];
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: getListProduct,
  });
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-rubik sm:gap-10 md:gap-10 gap-[100px] items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <CartNavbar className="bg-white-A700 flex items-center justify-center md:px-5 px-[75px] py-[35px] w-full" />
          {/* Banner */}
          <div className="bg-orange-50 flex flex-col items-start justify-start md:px-10 sm:px-5 px-[75px] py-20 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[60px] items-center justify-start max-w-[1290px] mx-auto w-full">
              <div className="flex flex-1 flex-col gap-[30px] items-start justify-start w-full">
                <div className="flex flex-col gap-[26px] items-start justify-start w-full">
                  <Text
                    className="text-black-900 text-xl tracking-[-0.50px] w-full"
                    size="txtRubikRomanRegular20"
                  >
                    Interior Needs
                  </Text>
                  <Text
                    className="leading-[60.00px] max-w-[615px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-black-900 tracking-[-0.50px]"
                    size="txtPollerOneRegular40"
                  >
                    <span className="text-black-900 font-raleway text-left font-bold">
                      Various{" "}
                    </span>
                    <span className="text-bluegray-900 font-raleway text-left font-bold">
                      new collections
                    </span>
                    <span className="text-black-900 font-raleway text-left font-bold">
                      {" "}
                      of furniture to decorate the corner of your house.
                    </span>
                  </Text>
                </div>
                <Button
                  className="common-pointer bg-bluegray-900 border-2 border-bluegray-900 border-solid cursor-pointer font-medium leading-[normal] min-w-[218px] py-[18px] text-center text-xl text-yellow-100 tracking-[-0.50px]"
                  onClick={() => navigate("/shop")}
                >
                  Shop Now
                </Button>
              </div>
              <Img
                className="flex-1 md:flex-none h-[566px] sm:h-auto max-h-[566px] object-cover sm:w-[] md:w-[]"
                src="images/img_nathanoakleyo.png"
                alt="nathanoakleyo"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center md:px-10 sm:px-5 px-[75px] w-full">
          <List
            className="sm:flex-col flex-row gap-5 grid md:grid-cols-1 grid-cols-2 justify-center max-w-[1290px] mx-auto w-full"
            orientation="horizontal"
          >
            <div className="bg-gradient  flex flex-1 flex-col items-start justify-start sm:px-5 px-[30px] py-6 w-full">
              <div className="flex sm:flex-col flex-row sm:gap-10 gap-[76px] items-center justify-start w-full">
                <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                  <div className="flex flex-col gap-[31px] items-start justify-start w-full">
                    <Text
                      className="text-white text-lg tracking-[-0.50px] w-full"
                      size="txtRubikRegular18Gray53"
                    >
                      Living Room
                    </Text>
                    <Text
                      className="md:max-w-full max-w-xs text-4xl sm:text-[32px] md:text-[34px] text-white tracking-[-0.50px]"
                      size="txtRalewayBold36"
                    >
                      The best foam padded chair
                    </Text>
                  </div>
                  <Button
                    className="common-pointer border-2 border-gray-50 border-solid cursor-pointer font-medium leading-[normal] min-w-[155px] py-[15px] text-base text-center text-gray-50 tracking-[-0.50px]"
                    onClick={() => navigate("/shop")}
                  >
                    Shop Now
                  </Button>
                </div>
                <Img
                  className="h-[301px] md:h-auto max-h-[301px] object-cover sm:w-[]"
                  src="/images/img_sammoghadamkh.png"
                  alt="sammoghadamkh"
                />
              </div>
            </div>
            <div className="bg-gradient  flex flex-1 flex-col items-center justify-center sm:px-5 px-[30px] py-6 w-full">
              <div className="flex sm:flex-col flex-row sm:gap-10 gap-[79px] h-[301px] md:h-auto items-center justify-start w-full">
                <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                  <div className="flex flex-col gap-[31px] items-start justify-start w-full">
                    <Text
                      className="text-white text-lg tracking-[-0.50px] w-full"
                      size="txtRubikRegular18Gray53"
                    >
                      Living Room
                    </Text>
                    <Text
                      className="max-w-[306px] md:max-w-full text-4xl sm:text-[32px] md:text-[34px] text-white tracking-[-0.50px]"
                      size="txtRalewayBold36"
                    >
                      Latest model chandelier
                    </Text>
                  </div>
                  <Button
                    className="common-pointer border-2 border-gray-50 border-solid cursor-pointer font-medium leading-[normal] min-w-[155px] py-[15px] text-base text-center text-gray-50 tracking-[-0.50px]"
                    onClick={() => navigate("/shop")}
                  >
                    Shop Now
                  </Button>
                </div>
                <Img
                  className="h-[244px] md:h-auto max-h-[244px] object-cover sm:w-[]"
                  src="/images/img_phildesforges.png"
                  alt="phildesforges"
                />
              </div>
            </div>
          </List>
        </div>
        {/* Banner 2 */}
        <div className="h-[535px] md:h-[892px] md:px-5 relative w-full">
          <div className="absolute bg-yellow-100 bottom-[0] h-[440px] inset-x-[0] mx-auto w-full"></div>
          <div className="absolute flex md:flex-col flex-row md:gap-10 h-full inset-y-[0] items-center justify-between max-w-[1365px] my-auto right-[0] w-full">
            <div className="flex sm:flex-1 flex-col gap-[30px] items-start justify-start w-[525px] sm:w-full">
              <div className="flex flex-col gap-[18px] items-start justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-bluegray-900 sm:text-xl tracking-[-0.50px] w-full"
                  size="txtRubikRegular24"
                >
                  Interior Modern
                </Text>
                <Text
                  className="leading-[60.00px] max-w-[525px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-black-900 tracking-[-0.50px]"
                  size="txtRalewayRomanBold40"
                >
                  Arrange your home in such a way with our modern interiors
                </Text>
              </div>
              <Button
                className="common-pointer border-2 border-bluegray-900 border-solid cursor-pointer font-medium leading-[normal] min-w-[218px] py-[18px] text-bluegray-900 text-center text-xl tracking-[-0.50px]"
                onClick={() => navigate("/shopdetaildescription")}
              >
                Shop Now
              </Button>
            </div>
            <Img
              className="sm:flex-1 h-[535px] md:h-auto object-cover w-[535px] sm:w-full"
              src="/images/img_insideweather.png" //change image new
              alt="insideweather"
            />
          </div>
        </div>
        <div className="flex flex-col font-raleway items-center justify-start md:px-10 sm:px-5 px-[75px] w-full">
          <div className="flex flex-col md:gap-10 gap-[67px] items-center justify-start max-w-[1290px] mx-auto w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-bluegray-900 text-center tracking-[-0.50px] w-full"
              size="txtRalewayRomanBold32"
            >
              New Arrival
            </Text>
            <div className="flex flex-col font-rubik items-start justify-start w-full">
              <div className="md:gap-5 gap-[19px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                {data?.list_best_sellers_interior.map((item, index) => (
                  <React.Fragment key={`CardProduct${index}`}>
                    <CardProduct
                      className="flex flex-1 flex-col gap-4 items-start justify-start w-full"
                      status="New"
                      name={item.interior_name}
                      id={item._id}
                      price={item.price}
                      category={item.material}
                      image={item.images}
                    />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Infor shipping */}
        <div className="flex flex-col font-raleway items-center justify-center md:px-10 sm:px-5 px-[75px] w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[85px] items-center justify-start max-w-[1290px] mx-auto w-full">
            <div className="flex flex-1 flex-col gap-[50px] h-full items-start justify-start w-full">
              <Text
                className="leading-[60.00px] max-w-[602px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-black-900 tracking-[-0.50px]"
                size="txtRalewayRomanBold40"
              >
                We guarantee the safety of your shopping
              </Text>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="sm:gap-5 gap-[50px] grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                  <div className="flex flex-1 flex-col gap-10 items-start justify-start w-full">
                    <Img
                      className="h-[60px] w-[63px]"
                      src="/images/img_volume.svg"
                      alt="volume"
                    />
                    <div className="flex flex-col gap-3 items-start justify-start w-[276px]">
                      <Text
                        className="text-black-900 text-xl tracking-[-0.50px] w-full"
                        size="txtRalewaySemiBold20"
                      >
                        Fast Shipping
                      </Text>
                      <Text
                        className="leading-[25.00px] max-w-[276px] md:max-w-full text-gray-500 text-sm tracking-[-0.50px]"
                        size="txtRubikRegular14"
                      >
                        "Swift Delivery" Feel free to adjust the wording based
                        on your preference and context!{" "}
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-10 items-start justify-start w-full">
                    <Img
                      className="h-[60px] w-[63px]"
                      src="/images/img_lock.svg"
                      alt="lock"
                    />
                    <div className="flex flex-col gap-3 items-start justify-start w-[276px]">
                      <Text
                        className="text-black-900 text-xl tracking-[-0.50px] w-full"
                        size="txtRalewaySemiBold20"
                      >
                        Safe Delivery
                      </Text>
                      <Text
                        className="leading-[25.00px] max-w-[276px] md:max-w-full text-gray-500 text-sm tracking-[-0.50px]"
                        size="txtRubikRegular14"
                      >
                        "Secure Delivery: Ensuring Your Order Arrives Safely"{" "}
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-10 items-start justify-start w-full">
                    <Img
                      className="h-[60px] w-[63px]"
                      src="/images/img_clock.svg"
                      alt="clock"
                    />
                    <div className="flex flex-col gap-3 items-start justify-start w-[276px]">
                      <Text
                        className="text-black-900 text-xl tracking-[-0.50px] w-full"
                        size="txtRalewaySemiBold20"
                      >
                        365 Days Return
                      </Text>
                      <Text
                        className="leading-[25.00px] max-w-[276px] md:max-w-full text-gray-500 text-sm tracking-[-0.50px]"
                        size="txtRubikRegular14"
                      >
                        "365-Day Return Policy: Shop with Confidence"{" "}
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-10 items-start justify-start w-full">
                    <Img
                      className="h-[60px] w-[63px]"
                      src="/images/img_call.svg"
                      alt="call"
                    />
                    <div className="flex flex-col gap-3 items-start justify-start w-[276px]">
                      <Text
                        className="text-black-900 text-xl tracking-[-0.50px] w-full"
                        size="txtRalewaySemiBold20"
                      >
                        24 hours CS
                      </Text>
                      <Text
                        className="leading-[25.00px] max-w-[276px] md:max-w-full text-gray-500 text-sm tracking-[-0.50px]"
                        size="txtRubikRegular14"
                      >
                        "24/7 Customer Support: Assistance Whenever You Need It"{" "}
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Img
              className="flex-1 md:flex-none md:h-[640px] sm:h-auto h-full max-h-[640px] object-cover sm:w-[] md:w-[]"
              src="/images/img_rectangle16.png"
              alt="rectangleSixteen"
            />
          </div>
        </div>
        {/*Footer  */}
        <div className="flex flex-col font-rubik items-start justify-start md:px-10 sm:px-5 px-[75px] w-full"></div>
        <CartSectionfooter className="bg-black-2 text-white flex font-raleway gap-2 items-center justify-center md:px-5 px-[75px] py-[50px] w-full" />
      </div>
    </>
  );
};

export default HomepagePage;
