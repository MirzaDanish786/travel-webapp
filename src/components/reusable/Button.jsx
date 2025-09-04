import React, { useRef } from 'react';

const Button = ({ className, hoverDivColor, hoverDivTextColor,text }) => {
  const btnRef = useRef(null);
  const textRef = useRef(null);

  const handleMouseEnter = () => {
    btnRef.current.classList.remove('-translate-x-full', 'opacity-0');
    btnRef.current.classList.add('translate-x-0', 'opacity-100');

    textRef.current.classList.add(`${hoverDivTextColor}`);
  };

  const handleMouseLeave = () => {
    btnRef.current.classList.remove('translate-x-0', 'opacity-100');
    btnRef.current.classList.add('-translate-x-full', 'opacity-0');

    textRef.current.classList.remove(`${hoverDivTextColor}`);
  };

  return (
    <div>
      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`${className} ${hoverDivColor === 'bg-white' && 'heroBtn'} px-[22px] py-[9px] font-medium cursor-pointer relative overflow-hidden border rounded-[5px] max-lg:px-4 max-lg:py-2`}
      >
        <div ref={textRef} className="relative z-10 transition-colors duration-300">
         {`${text}`}
        </div>
        <div
          ref={btnRef}
          className={`${hoverDivColor} absolute inset-0 rounded-[5px] -translate-x-full opacity-0 transition-all duration-300 z-0`}
        ></div>
      </button>
    </div>
  );
};

export default Button;
