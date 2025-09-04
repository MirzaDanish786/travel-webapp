import React from "react";
import BookingCardImg from "../../assets/images/BookingCard.jpg";
import BookingCardLeaf from "../../assets/images/BookingCardLeaf.png";
import BookingCardMap from "../../assets/images/BookingCardMap.png";
import BookingCardSend from "../../assets/images/BookingCardSend.png";
import BookingCardBuilding from "../../assets/images/BookingCardBuilding.png";
const BookingCard = () => {
  return (
    <div className="w-[370px] h-[400px] px-6 py-5 rounded-3xl font-poppin bg-white shadow-card flex flex-col gap-7 max-xl:w-[350px] max-xl:h-[380px] max-[900px]:w-full">
      <div>
        <img src={BookingCardImg} alt="" />
      </div>

      <div className="flex flex-col gap-5">
        <div className="text-[#080809] text-lg font-normal  ">
          Trip To Greece
        </div>

        <div>
          <div className="text-[#84829A]">14-29 June | by Robbin joseph</div>
        </div>

        <div className="flex gap-[18px]">
          <div>
            <img src={BookingCardLeaf} alt="" />
          </div>
          <div>
            <img src={BookingCardMap} alt="" />
          </div>
          <div>
            <img src={BookingCardSend} alt="" />
          </div>
        </div>

        <div className="flex gap-4">
          <div>
            <img src={BookingCardBuilding} alt="" />
          </div>
          <div className="text-[#84829A]">24 people going</div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
