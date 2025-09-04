import React from "react";
const TestinomialCard = ({ name, location, text, img }) => {
  return (
    <div className="p-9 w-full h-[245px] relative text-[#5E6282] rounded-[10px] shadow-card flex flex-col gap-8 bg-white max-sm:p-6">
      <div className="absolute top-0 -left-[40px] max-sm:w-10">
        <img src={img} alt={name} />
      </div>
      <div className="max-sm:text-sm max-sm:line-clamp-7">{text}</div>
      <div>
        <div className="text-lg font-semibold ">{name}</div>
        <div className="text-sm">{location}</div>
      </div>
    </div>
  );
};

export default TestinomialCard;