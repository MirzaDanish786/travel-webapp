import React from "react";
import ServicesCard from "../reusable/ServicesCard";
import ServiceImg_1 from "../../assets/images/ServiceCard_1.png";
// import ServiceImg_2 from "../../assets/images/ServiceCard_2.png";
import ServiceCard_2_plane from "../../assets/images/ServiceCard_2_plane.png";
import ServiceCard_2_img_bg from "../../assets/images/ServiceCard_2_img_bg.png";
import ServiceImg_3 from "../../assets/images/ServiceCard_3.png";
import ServiceImg_4 from "../../assets/images/ServiceCard_4.png";
import ServiceBackground from "../../assets/images/ServiceBackground.png";

const Services = () => {
  return (
    <div className="mx-[140px] mt-[105px] relative flex flex-col items-center mb-[123px] max-xl:mx-20 max-lg:mx-8">
      <div className="absolute top-0 right-0 -z-30">
        <img src={ServiceBackground} alt="" />
      </div>
      <div className="font-semibold text-lg text-[#5E6282] font-poppin ">
        CATEGORY
      </div>
      <div className="font-bold text-[50px] text-[#14183E] font-volkhov mb-[66px] max-lg:text-5xl max-sm:text-4xl">
        We Offer Best Services
      </div>
      <div className="grid grid-rows-1 grid-cols-4 gap-7 max-xl:gap-4 max-lg:grid-cols-2 max-lg:gap-y-10 max-sm:grid-cols-1">
        <div>
          <ServicesCard
            img={ServiceImg_1}
            title={"Calculated Weather "}
            desc={
              "Built Wicket longer admire do barton vanity itself do in it."
            }
          />
        </div>
        <div>
          <ServicesCard
            card_2_bg_imgs={[ServiceCard_2_img_bg, ServiceCard_2_plane]}
            title={"Best Flights"}
            desc={"Engrossed listening. Park gate sell they west hard for the."}
          />
        </div>
        <div>
          <ServicesCard
            img={ServiceImg_3}
            title={"Local Events"}
            desc={
              "Barton vanity itself do in it. Preferd to men it engrossed listening. "
            }
          />
        </div>
        <div>
          <ServicesCard
            img={ServiceImg_4}
            title={"Customization"}
            desc={
              "We deliver outsourced aviation services for military customers"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
