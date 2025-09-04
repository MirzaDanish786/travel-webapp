import React, { useRef, useState, useEffect } from "react";
import Logo from "../../assets/images/Logo.png";
import DownArrow from "../../assets/icons/downArrow.svg?react";
import Button from "../reusable/Button";
import Hamburger from "../reusable/Hamburger";
import Outlet from "../reusable/Outlet";

const Navbar = () => {
  const hoverRefs = useRef([]);
  const [isDropDown, setIsDropDown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropDownRef = useRef(null);
  const hamRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 800;
      setIsMobile(mobile);
      if (!mobile) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    handleResize(); 
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = (index) => {
    if (hoverRefs.current[index]) {
      hoverRefs.current[index].classList.add(
        "w-full",
        "outline",
        "bg-black",
        "transition-all",
        "duration-300"
      );
    }
  };

  const handleMouseLeave = (index) => {
    if (hoverRefs.current[index]) {
      hoverRefs.current[index].classList.remove(
        "w-full",
        "outline",
        "bg-black"
      );
    }
  };

  const handleDropDown = () => {
    setIsDropDown((prev) => !prev);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target) && hamRef.current && !hamRef.current.contains(e.target)) {
        setIsDropDown(false);
        setIsMenuOpen(false)
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);


  const closeMenu = () => setIsMenuOpen(false);  

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const navItems = ["Destinations", "Hotels", "Flights", "Booking", "Login"];

  return (
    <>
    {isMenuOpen && <Outlet onClick={closeMenu} />}
    <div className="flex justify-between mx-[140px] mt-[47px] max-xl:mx-20 max-lg:mx-8 relative">
      <div className="logo">
        <a href="#">
          <img src={Logo} alt="logo" />
        </a>
      </div>
      <div className="center flex items-center">
        {isMobile && (
          <div className="flex gap-4 items-center">
            <div>
              <Button
                text={"Sign up"}
                className={`${isMenuOpen ? "hidden" : ""} border border-[#212832] rounded-[5px] text-[17px]`}
                hoverDivColor={"bg-black"}
                hoverDivTextColor={"text-white"}
              />
            </div>
            <Hamburger isActive={isMenuOpen} onClick={toggleMenu} />
          </div>
        )}

        {/* Desktop Menu */}
        {!isMobile && (
          <ul className="font-normal font-poppin text-[17px] flex items-center gap-12 max-xl:gap-8 max-lg:gap-6 max-md:hidden">
            {navItems.map((item, index) => (
              <li
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                className="cursor-pointer"
              >
                <div>
                  <a href="#">{item}</a>
                  <div className="flex mt-1">
                    <div
                      ref={(el) => (hoverRefs.current[index] = el)}
                      className="hover-effect w-0"
                    ></div>
                  </div>
                </div>
              </li>
            ))}
            <li>
              <div>
                <Button
                  text={"Sign up"}
                  className={"border border-[#212832] rounded-[5px] text-[17px]"}
                  hoverDivColor={"bg-black"}
                  hoverDivTextColor={"text-white"}
                />
              </div>
            </li>
            <li>
              <div
                ref={dropDownRef}
                className="flex gap-[6.5px] items-center cursor-pointer relative"
                onClick={handleDropDown}
              >
                <div>EN</div>
                <div>
                  <DownArrow />
                </div>
                {isDropDown && (
                  <div className="absolute bg-white overflow-hidden rounded-sm top-full shadow text-sm z-50">
                    <ul>
                      <li className="hover:bg-[#DF6951] cursor-pointer px-3 py-1">
                        English
                      </li>
                      <li className="hover:bg-[#DF6951] cursor-pointer px-3 py-1">
                        Urdu
                      </li>
                      <li className="hover:bg-[#DF6951] cursor-pointer px-3 py-1">
                        Spanish
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </li>
          </ul>
        )}

        {/* Mobile menu */}
        {isMobile && (
          <div
            ref={hamRef}
            className={`${
              isMenuOpen ? "right-0 flex" : "-right-full"
            } flex-col min-h-screen overflow-auto w-1/2 bg-white transition-all duration-300 fixed top-0 z-40 px-8 pt-20 gap-2`}
            style={{ flexDirection: "column" }}
          >
            {navItems.map((item, idx) => (
              <div key={idx} className="py-2 border-b border-gray-100">
                {item}
              </div>
            ))}
          
            <div
              className="flex flex-col items-start gap-[6.5px] cursor-pointer mt-2"
              onClick={handleDropDown}
            >
              <div className="flex items-center gap-2">
              <div>EN</div>
              <div>
                <DownArrow />
              </div>
              </div>
              {isDropDown && (
                <div className="w-full bg-white overflow-hidden rounded-sm text-sm z-50">
                  <ul>
                    <li className=" border-b border-gray-100 cursor-pointer py-1">
                      English
                    </li>
                    <li className=" border-b border-gray-100 cursor-pointer  py-1">
                      Urdu
                    </li>
                    <li className="cursor-pointer  py-1">
                      Spanish
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
    </>

  );
};

export default Navbar;