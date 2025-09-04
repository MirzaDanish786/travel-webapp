import React from "react";
import GotoIcon from "../../assets/icons/gotoIcon.svg?react";
const DesinationCard = ({ img, title, price, days }) => {
  return (
    <div className="h-[420px] shadow-card rounded-[24px] overflow-hidden relative max-md:w-[60%] max-md:mx-auto max-[550px]:w-full  ">
      <div className="w-full max-[550px]:h-[450px]">
        <img className="w-full object-cover h-full object-top" src={img} alt="" />
      </div>

        {/* Lower section */}
      <div className="p-5 flex flex-col gap-[22px] absolute bottom-0 bg-white w-full max-md:p-3 ">
        <div className="flex justify-between font-poppin text-lg font-normal text-[#5E6282]">
          <div>{title}</div>
          <div>${price}</div>
        </div>
        <div className="flex gap-0.5 items-center">
          <div>
            <GotoIcon />
          </div>
          <div className="text-[16px] text-[#5E6282] font-poppin">{days} Days Trip</div>
        </div>
      </div>
    </div>
  );
};

export default DesinationCard;
