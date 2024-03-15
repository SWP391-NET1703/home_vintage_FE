import React, { useEffect, useState } from "react";

import { Button, Img, Input, Line, SelectBox, Text } from "components";
import CartColumnframe48095972 from "components/CartColumnframe48095972";
import CartNavbar from "components/CartNavbar";
import CartSectionfooter from "components/CartSectionfooter";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "services/user/getUser";
import { useForm } from "react-hook-form";
import { newOrder } from "store/slice/OrderSlice";
import { createOrder } from "services/order/createOrder";

const homeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const unitedStatesUsOptionsList = [
  { label: "Viet Nam", value: "VN" },
  { label: "United States", value: "US" },
  { label: "England", value: "EL" },
];

const CheckoutPage = () => {
  const user = useSelector((state) => state.auth.currentUser.result);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  const [me, setMe] = useState({});
  const [totalAmt, setTotalAmt] = useState(0);
  useEffect(() => {
    let price = 0;
    products.map((item) => {
      price += item.price * item.quantity;
    });
    setTotalAmt(price);
  }, [products]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getUser(user?.access_token);
      setMe(data.result);
    };
    fetchData();
  }, []);
  console.log("me", me);
  const defaultValues = {
    user_id: "65aa9debdef460a8f7ed44d0",
    total_payment: totalAmt,
    status_payment: "1",
    address: "HCM",
    detail: [
      products?.map((item) => {
        return {
          interior_id: item._id,
          price: item.price,
          quantity: item.quantity,
        };
      }),
    ],
  };
  const {
    register,
    handleSubmit,
    reset,
    setError,
    watch,
    setValue,
    control,
    formState: { errors },
    form,
  } = useForm({
    defaultValues,
    mode: "onSubmit",
  });
  const dataForm = watch();
  // console.log("dataForm", dataForm);
  const onSubmit = (formData) => {
    const data = { ...formData, total_payment: totalAmt };
    console.log(user.access_token);
    createOrder(user.access_token);
    console.log("data", data);
    // dispatch(newOrder(data));
  };

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-rubik sm:gap-10 md:gap-10 gap-[100px] items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <CartNavbar className="bg-white-A700 flex items-center justify-center md:px-5 px-[75px] py-[35px] w-full" />
        <div className="flex flex-col font-raleway items-center justify-start md:px-10 sm:px-5 px-[75px] w-full">
          <div className="flex flex-col gap-[50px] items-center justify-start max-w-[1290px] mx-auto w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center tracking-[-0.50px] w-full"
              size="txtRalewayBold40"
            >
              Checkout
            </Text>
            <form method="POST" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex md:flex-col flex-row gap-[19px] items-start justify-center w-full">
                <div className="flex flex-1 flex-col gap-[53px] items-start justify-start w-full">
                  <div className="flex flex-col gap-9 items-start justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.50px] w-full"
                      size="txtRalewayBold24"
                    >
                      Contact Information
                    </Text>
                    <div className="flex flex-col gap-[35px] items-start justify-start w-full">
                      <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-full">
                        <div className="flex flex-1 flex-col gap-3 items-start justify-start w-full">
                          <Text
                            className="text-black-900 text-xl tracking-[-0.50px] w-full"
                            size="txtRalewayRomanRegular20Black900"
                          >
                            Full Name
                          </Text>
                          <Input
                            {...register("total_payment")}
                            className="font-rubik leading-[normal] p-0 placeholder:text-gray-500 sm:px-5 text-gray-500 text-left text-sm tracking-[-0.50px] w-full"
                            wrapClassName="border border-bluegray-100 border-solid pl-[22px] pr-[35px] py-[18px] w-full"
                            setValue={totalAmt}
                          ></Input>
                        </div>
                      </div>
                      <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-full">
                        <div className="flex flex-1 flex-col gap-3 items-start justify-start w-full">
                          <Text
                            className="text-black-900 text-xl tracking-[-0.50px] w-full"
                            size="txtRalewayRomanRegular20Black900"
                          >
                            Phone
                          </Text>
                          <Input
                            name="frame48096053"
                            placeholder="Your phone here.."
                            className="font-rubik leading-[normal] p-0 placeholder:text-gray-500 sm:px-5 text-gray-500 text-left text-sm tracking-[-0.50px] w-full"
                            wrapClassName="border border-bluegray-100 border-solid pl-[22px] pr-[35px] py-[18px] w-full"
                            value={me?.phone_number}
                          ></Input>
                        </div>
                        <div className="flex flex-1 flex-col gap-3 items-start justify-start w-full">
                          <Text
                            className="text-black-900 text-xl tracking-[-0.50px] w-full"
                            size="txtRalewayRomanRegular20Black900"
                          >
                            Email
                          </Text>
                          <Input
                            name="frame48096054"
                            placeholder="Your email here.."
                            className="font-rubik leading-[normal] p-0 placeholder:text-gray-500 sm:px-5 text-gray-500 text-left text-sm tracking-[-0.50px] w-full"
                            wrapClassName="border border-bluegray-100 border-solid pl-[22px] pr-[35px] py-[18px] w-full"
                            value={me?.email}
                          ></Input>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[30px] items-start justify-start w-full">
                    <div className="flex flex-col gap-9 items-start justify-start w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.50px] w-full"
                        size="txtRalewayBold24"
                      >
                        Shipping Method
                      </Text>
                      <div className="flex flex-row font-rubik gap-[21px] items-start justify-start w-full">
                        <Button
                          className="border border-bluegray-100 border-solid cursor-pointer flex items-center justify-center min-w-[154px] px-[29px] py-[15px]"
                          leftIcon={
                            <div className="h-10 mr-2.5 w-10 bg-gray-201 p-2 rounded-[50%] flex justify-center items-center">
                              <Img
                                className="h-6"
                                src="images/img_computer.svg"
                                alt="computer"
                              />
                              <input
                                type="hidden"
                                id="payment_method"
                                value="1"
                              />
                              <input
                                type="hidden"
                                id="status_payment"
                                value="1"
                              />
                            </div>
                          }
                        >
                          <div className="leading-[normal] sm:px-5 text-gray-500 text-left text-lg tracking-[-0.50px]">
                            Store
                          </div>
                        </Button>
                        <Button
                          className="bg-gray-100 border border-bluegray-900 border-solid cursor-pointer flex items-center justify-center min-w-[175px] px-[29px] py-[15px]"
                          leftIcon={
                            <div className="h-10 mr-2.5 w-10 bg-bluegray-900 p-2 rounded-[50%] flex justify-center items-center">
                              <Img
                                className="h-6"
                                src="images/img_airplane.svg"
                                alt="airplane"
                              />
                            </div>
                          }
                        >
                          <div className="leading-[normal] sm:px-5 text-black-900 text-left text-lg tracking-[-0.50px]">
                            Delivery
                          </div>
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 items-start justify-start w-full">
                      <Text
                        className="text-black-900 text-xl tracking-[-0.50px] w-full"
                        size="txtRalewayRomanRegular20Black900"
                      >
                        Country / Region{" "}
                      </Text>
                      <SelectBox
                        className="border border-bluegray-100 border-solid font-rubik leading-[normal] sm:px-5 px-[25px] py-[18px] text-gray-500 text-left text-sm tracking-[-0.50px] w-full"
                        placeholderClassName="text-gray-500"
                        indicator={
                          <Img
                            className="h-6 w-6"
                            src="images/img_arrowdown_black_900.svg"
                            alt="arrow_down"
                          />
                        }
                        id="address"
                        isMulti={false}
                        name="frame48096062"
                        options={unitedStatesUsOptionsList}
                        isSearchable={false}
                        placeholder="United States (US)"
                      />
                    </div>
                    <div className="flex flex-col gap-3 items-start justify-start w-full">
                      <Text
                        className="text-black-900 text-xl tracking-[-0.50px] w-full"
                        size="txtRalewayRomanRegular20Black900"
                      >
                        Street address{" "}
                      </Text>
                      <div className="border border-bluegray-100 border-solid flex flex-col font-rubik h-[150px] md:h-auto items-start justify-start sm:px-5 px-[22px] py-[19px] w-full">
                        <Input
                          className="text-gray-500 text-sm tracking-[-0.50px] w-auto"
                          size="txtRubikRegular14"
                        >
                          Write your full address
                        </Input>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-9 items-start justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.50px] w-full"
                      size="txtRalewayBold24"
                    >
                      Payment Method
                    </Text>
                    <div className="flex sm:flex-col flex-row gap-5 items-start justify-start w-auto sm:w-full">
                      <div className="border border-bluegray-100 border-solid flex flex-col h-[73px] md:h-auto items-center justify-center p-[25px] sm:px-5 w-[155px]">
                        <Img
                          className="h-[19px] md:h-auto object-cover w-[60px] sm:w-full"
                          src="images/img_visa.png"
                          alt="visa"
                        />
                      </div>
                      <div className="border border-bluegray-100 border-solid flex flex-col h-[73px] md:h-auto items-center justify-center p-[25px] sm:px-5 w-[155px]">
                        <Img
                          className="h-[23px] w-[60px]"
                          src="images/img_signal.svg"
                          alt="signal"
                        />
                      </div>
                      <div className="border border-bluegray-100 border-solid flex flex-col h-[73px] md:h-auto items-center justify-center p-[25px] sm:px-5 w-[155px]">
                        <Img
                          className="h-[19px] w-20"
                          src="images/img_refresh.svg"
                          alt="refresh"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Your Order */}
                <div className="bg-gray-53 flex sm:flex-1 flex-col items-start justify-start sm:px-5 px-[27px] py-[34px] w-[416px] sm:w-full">
                  <div className="flex flex-col gap-[30px] items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-xl tracking-[-0.50px] w-full"
                      size="txtRalewayRomanBold20"
                    >
                      Your Order
                    </Text>

                    <div className="flex flex-col font-rubik gap-[25px] items-start justify-start w-full">
                      {products?.map((item) => {
                        return (
                          <div className="flex flex-col gap-[25px] items-start justify-start w-full">
                            <div className="flex flex-row items-center justify-between w-full">
                              <Text
                                className="text-gray-500 text-xl tracking-[-0.50px] w-auto"
                                size="txtRalewayRomanRegular20"
                              >
                                {item.name}
                              </Text>
                              <Text
                                className="text-black-900 text-xl tracking-[-0.50px] w-auto"
                                size="txtPoppinsSemiBold20"
                              >
                                {item.price * item.quantity}
                              </Text>
                            </div>
                          </div>
                        );
                      })}
                      <Line className="bg-black-2 h-px w-full" />

                      <Line className="bg-black-900 h-px w-full" />
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="text-gray-500 text-xl tracking-[-0.50px] w-auto"
                          size="txtRalewayRomanRegular20"
                        >
                          Total
                        </Text>
                        <Text
                          className="text-black-900 text-xl tracking-[-0.50px] w-auto"
                          size="txtPoppinsSemiBold20"
                          id="total_payment"
                        >
                          {totalAmt}
                        </Text>
                      </div>
                      <Button
                        // onClick={(e) => handleCheckout(e)}
                        type="submit"
                        className="bg-bluegray-900 cursor-pointer font-semibold leading-[normal] py-3.5 text-center text-lg text-yellow-100 tracking-[-0.50px] w-full"
                      >
                        Place Order
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <CartSectionfooter className="bg-black-2 text-white flex font-raleway gap-2 items-center justify-center md:px-5 px-[75px] py-[50px] w-full" />
      </div>
    </>
  );
};

export default CheckoutPage;
