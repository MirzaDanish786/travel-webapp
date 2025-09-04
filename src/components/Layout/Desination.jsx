import React from "react";
import DesinationCard from "../reusable/DesinationCard";
import DesinationCard_1 from "../../assets/images/DesinationCard_1.png";
import DesinationCard_2 from "../../assets/images/DesinationCard_2.jpg";
import DesinationCard_3 from "../../assets/images/DesinationCard_3.png";
import DesinationBackground from "../../assets/images/DesinationBackground.png";

const Desination = () => {
  return (
    <div className="mx-[140px] relative flex flex-col items-center max-xl:mx-20 max-lg:mx-8">
      <div className="font-semibold text-lg text-[#5E6282] font-poppin ">
        Top Selling
      </div>
      <div className="font-bold text-[50px] text-[#14183E] font-volkhov mb-[66px] max-lg:text-5xl max-sm:text-4xl">
        Top Destinations
      </div>
      <div className="grid grid-cols-3 gap-9 max-lg:gap-5 max-md:grid-cols-1 max-[550px]:w-full">
        <div>
          <DesinationCard
            img={DesinationCard_1}
            title={"Rome, Italy"}
            price={"5.42k"}
            days={"10"}
          />
        </div>
        <div>
          <DesinationCard
            img={DesinationCard_2}
            title={"London, UK"}
            price={"4.2k"}
            days={"12"}
          />
        </div>
        <div className="relative">
          {/* DesinationBackground image */}
          <div className="absolute bottom-[40px] -right-[60px] -z-40 max-md:right-[70px] max-[550px]:-right-[60px]">
            <img src={DesinationBackground} alt="" />
          </div>
          <DesinationCard
            img={DesinationCard_3}
            title={"Full Europe"}
            price={"15k"}
            days={"28"}
          />
        </div>
      </div>
    </div>
  );
};

export default Desination;
