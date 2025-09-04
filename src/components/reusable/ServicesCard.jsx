import React, { useState } from "react";
import { useRef } from "react";
import ServiceCardHoverImg from '../../assets/images/ServiceCardHoverImg.png'
const ServicesCard = ({ img, title, desc, card_2_bg_imgs }) => {
    const cardRef = useRef(null);
    const [isHover, setIsHover] = useState(false);
    const handleAddHoverEffect = ()=>{
        setIsHover(true)
    }
    const handleRemoveHoverEffect = ()=>{
        setIsHover(false)
    }
  return (
    <div className="relative ">
    <div onMouseEnter={handleAddHoverEffect} onMouseLeave={handleRemoveHoverEffect} ref={cardRef} className="service-card flex h-[314px] gap-3 flex-col z-10  bg-white rounded-[36px] items-center p-11 cursor-pointer hover:shadow-card hover:z-30 max-xl:p-8 max-lg:p-4 max-lg:h-fit ">
      <div>
        {img ? (
            <img src={img} alt="" />
        ) : (
            <div className="h-[78px]">
              <div className="flex justify-center items-center">
                <img src={card_2_bg_imgs[0]} alt="" />
              </div>
              <div className="relative bottom-[100px] left-[10px]">
                <img className="" src={card_2_bg_imgs[1]} alt="" />
              </div>
          </div>
        )}
      </div>
      <div className="font-open-sans text-nowrap font-semibold text-[#1E1D4C] text-xl">
        {title}
      </div>
      <div className="text-sm font-poppin text-[#5E6282] leading-[26px] px-4 font-normal text-center font-popin ">
        {desc}
      </div>
    </div>
    {/*  Hover image */}
    <div className={`transition-all duration-300 absolute  -z-10 max-xl:-left-[17px] ${isHover ? '-left-[28px] -bottom-[38px] opacity-100' : '-left-[28px] opacity-0 -bottom-[70px]'}`}>
        {isHover && <img src={ServiceCardHoverImg} alt="" /> }
        
    </div>
        </div>
  );
};

export default ServicesCard;
