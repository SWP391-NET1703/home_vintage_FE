import { Button, Img, Text } from "components";
import React from "react";
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();
const Banner = (props) => {
    return (
        <div className={props.className}>
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
    );
}
Banner.defaultProps = {};
export default Banner;