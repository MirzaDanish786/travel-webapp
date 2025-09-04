import React from "react";
import Booking_1_img from "../../assets/images/Booking_1.png";
import Booking_2_img from "../../assets/images/Booking_2.png";
import Booking_3_img from "../../assets/images/Booking_3.png";
import BookingBackground from "../../assets/images/BookingBackground.png";
import BookingCard from "../reusable/BookingCard";
import BookingSubCard from "../reusable/BookingSubCard";

const Booking = () => {
  return (
    <div className="mx-[140px] justify-between mt-[186px] relative flex gap-5 max-xl:mx-20 max-lg:mx-8 max-xl:mt-[100px] max-[900px]:flex-col max-[900px]:gap-10">
      

      {/* Left */}
      <div className="left w-1/2 flex flex-col gap-8 max-[900px]:w-full">
        <div className="flex flex-col gap-4">
          <div className="font-poppin font-semibold text-lg text-[#5E6282]">
            Easy and Fast
          </div>
          <div className="font-volkhov text-[#14183E] font-bold text-[50px] w-[80%] max-[1370px]:text-[40px] max-[900px]:w-full">
            Book Your Next Trip In 3 Easy Steps
          </div>
        </div>

        <div className="flex flex-col gap-12 w-[70%] max-xl:w-full max-[900px]:gap-8">
          <div className="font-poppin flex gap-5 items-center">
            <div className="w-20 ">
              <img className="w-full " src={Booking_1_img} alt="" />
            </div>
            <div className="flex flex-col leading-[125%] ">
              <div className="text-[#5E6282] font-bold text-[16px] ">
                Choose Destination
              </div>
              <div className="text-[#5E6282] font-normal text-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </div>
            </div>
          </div>

          <div className="font-poppin flex gap-5 items-center">
            <div className="w-20">
              <img className="w-full" src={Booking_2_img} alt="" />
            </div>
            <div className="flex flex-col leading-[125%] ">
              <div className="text-[#5E6282] font-bold text-[16px] ">
                Make Payment
              </div>
              <div className="text-[#5E6282] font-normal text-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </div>
            </div>
          </div>

          <div className="font-poppin flex gap-5 items-center">
            <div className="w-20">
              <img className="w-full" src={Booking_3_img} alt="" />
            </div>
            <div className="flex flex-col leading-[125%] ">
              <div className="text-[#5E6282] font-bold text-[16px] ">
                Reach Airport on Selected Date
              </div>
              <div className="text-[#5E6282] font-normal text-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="right w-1/2 max-w-[600px] flex flex-col justify-end max-[900px]:w-full ">
        <div className="relative max-[900px]:w-full max-[900px]:mx-auto max-sm:w-full max-sm:flex max-sm:justify-center max-[900px]:flex max-[900px]:justify-center">
        {/* BG image */}
      <div className="absolute -top-[200px] right-0 -z-40 max-xl:-right-[100px] max-[900px]:-top-[100px]">
        <img src={BookingBackground} alt="" />
      </div>
          <BookingCard />
          <div className="absolute right-[18%] bottom-[8%] max-sm:-right-[20px] max-[900px]:-right-[30px]">
            <BookingSubCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
