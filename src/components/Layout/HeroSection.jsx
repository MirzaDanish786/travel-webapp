import React from "react";
import Button from "../reusable/Button";
import PlayBtn from "../reusable/PlayBtn";
import Traveller from '../../assets/images/Traveller.png'
import HeroBackground from '../../assets/images/HeroBackground.png'
import HeroBackground_1 from '../../assets/images/HeroBackground_1.png'

const HeroSection = () => {
  return (
    <div className="flex justify-between mx-[140px] mt-[18px] max-xl:mx-20 max-lg:mx-8 max-md:flex-col-reverse  ">

      {/* Bg image */}
      <div className="absolute top-0 right-0 w-[44%] -z-20">
        <img className="w-full object-contain" src={HeroBackground} alt="" />
      </div>
      <div className="absolute top-0 left-0 -z-20">
        <img className="w-full object-contain" src={HeroBackground_1} alt="" />
      </div>

      <div className="left w-[48%] flex flex-col gap-6 pt-[112px] max-xl:pt-20  max-xl:gap-4 max-lg:pt-16 max-md:w-full">

        <div className="text-xl font-bold text-[#DF6951] uppercase font-poppin max-xl:text-lg max-sm:text-sm">
          Best Destinations around the world
        </div>

        <div className="font-bold text-[84px] leading-[89px] tracking-[-4px] text-[#181E4B] font-volkhov max-xl:text-7xl max-xl:leading-[67px] max-lg:text-6xl max-sm:text-5xl max-sm:leading-none ">Travel, enjoy and live a new and full life</div>
        <div className="font-poppin font-normal text-[16px] leading-[30px] w-[68%] text-[#5E6282] max-xl:text-sm max-xl:leading-[20px] max-md:w-full">Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</div>

      <div className="flex gap-11 items-center max-sm:gap-5">
        <Button text={'Find out more'} className={'rounded-[10px] text-lg font-medium text-white bg-[#F1A501] border border-[#F1A501]'} hoverDivColor={'bg-white'} hoverDivTextColor={'text-[#F1A501]'}/>
        <PlayBtn/>
      </div>
      </div>
      <div className="right w-[52%] flex max-md:w-[80%]">
        <img className="object-contain w-full" src={Traveller} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
