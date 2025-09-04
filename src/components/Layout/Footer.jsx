import React from "react";
import FooterBg_1 from "../../assets/images/FooterBg_1.png";
import FooterBg_2 from "../../assets/images/FooterBg_2.png";
import FooterTopImg from "../../assets/images/FooterTop.png";
import MessageIcon from "../../assets/icons/messageIcon.svg?react";
import Facebook from "../../assets/images/Facebook.png";
import Instagram from "../../assets/images/Instagram.png";
import Twitter from "../../assets/images/Twitter.png";
import GooglePlay from "../../assets/images/GooglePlay.png";
import PlayStore from "../../assets/images/PlayStore.png";
import Button from "../reusable/Button";
const Footer = () => {
  return (
    <div className=" mx-[140px] font-poppin flex flex-col gap-[166px] max-xl:mx-20 max-lg:mx-8 max-lg:gap-[100px]">
      {/* upper section */}
      <div className="flex flex-col gap-[74px] bg-[#DFD7F9] px-[90px] py-20 relative rounded-tl-[129px] rounded-[20px] max-lg:p-10 max-md:rounded-tl-[80px] max-md:rounded-2xl max-md:p-5">

        {/* Overlay for opacity */}
        <div className="absolute inset-0 opacity-[20%] z-50 pointer-events-none rounded-tl-[129px] rounded-[20px] max-md:rounded-tl-[80px] max-md:rounded-2xl"></div>

        {/* Bg images */}
        <div className="absolute bottom-0 left-5">
          <img src={FooterBg_1} alt="" />
        </div>
        <div className="absolute top-0 right-0 ">
          <img src={FooterBg_2} alt="" />
        </div>
        <div className="absolute -top-[20px] -right-[20px] max-sm:w-14">
          <img className="w-full" src={FooterTopImg} alt="" />
        </div>

        <div className="text-[#5E6282] font-semibold text-[33px] text-center z-0 max-md:text-2xl ">
          Subscribe to get information, latest news and other interesting offers
          about Jadoo
        </div>

        <div className="flex gap-6 justify-center max-sm:flex-col max-sm:items-center">
          <div className="relative w-[421px] max-xl:w-[300px]">
            <input
              type="text"
              placeholder="Your email"
              className="w-full outline-none rounded-[10px] bg-white  pl-[66px] pr-[30px] py-[23px] max-sm:py-3 max-sm:pl-[50px]"
            />
            <div className="absolute top-[26px] left-[31px] max-sm:top-[16px] max-sm:left-[20px]">
              <MessageIcon />
            </div>
          </div>
          <div>
            <Button
              className={
                "feedback-btn text-[17px] font-semibold w-[180px] py-[22px] border-none text-white max-xl:w-[150px] max-lg:py-[22px] max-sm:py-3"
              }
              text={"Subcribe"}
              hoverDivColor={"bg-[#ffffff]"}
              hoverDivTextColor={"text-[#5E6282]"}
            />
          </div>
        </div>
      </div>

      {/* Lower section */}
      <div className="flex flex-col gap-20">

      <div className="flex justify-between flex-wrap gap-8">

        <div className="flex flex-col gap-[19px]">
          <div className="text-[44px] text-[#181E4B] font-normal leading-none">Jadoo.</div>
          <div className="text-[#5E6282] text-[13px] w-[65%] ">Book your trip in minute, get full Control for much longer.</div>
        </div>

        <div className="flex flex-col gap-[34px]">
              <div className="text-[21px] font-bold">Company</div>
              <div>
                <ul className="text-[#5E6282] text-lg">
                  <li><a href="#">About</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Mobile</a></li>
                </ul>
              </div>
        </div>

        <div className="flex flex-col gap-[34px]">
          <div className="text-[21px] font-bold">Contact</div>
          <div>
            <ul className="text-[#5E6282] text-lg">
              <li><a href="#">Help/FAQ</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Affilates</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col gap-[34px]">
          <div className="text-[21px] font-bold">More</div>
          <ul className="text-[#5E6282] text-lg">
            <li><a href="#">Arilines</a></li>
            <li><a href="#">Airline</a></li>
            <li><a href="#">Low fare tips</a></li>
          </ul>
        </div>

          <div className="flex flex-col gap-7">
            <div>

              <div className="flex ">
                <div><a href="#"><img src={Facebook} alt="" /></a></div>
                <div><a href="#"><img src={Instagram} alt="" /></a></div>
                <div><a href="#"><img src={Twitter} alt="" /></a></div>
              </div>
              <div className="text-xl text-[#5E6282]">Discover our app</div>
            </div>
              <div className="flex gap-2">
                <div><a href="#"><img src={GooglePlay} alt="" /></a></div>
                <div><a href="#"><img src={PlayStore} alt="" /></a></div>
              </div>
        </div>


      </div>
        <div className="text-sm text-[#5E6282] mx-auto">
          <a href="#">
          All rights reserved@jadoo.co
          </a>
        </div>
      </div>


    </div>
  );
};

export default Footer;
