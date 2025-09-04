import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TestinomialCard from "../reusable/TestinomialCard";
import UserDp from "../../assets/images/UserDp.png";
import DownArrow from "../../assets/icons/downArrow.svg?react";
import { div } from "framer-motion/client";

const testimonials = [
  {
    id: 1,
    name: "Mike Taylor",
    location: "Lahore, Pakistan",
    text: "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
    img: UserDp,
  },
  {
    id: 2,
    name: "John Doe",
    location: "Karachi, Pakistan",
    text: "“This company has been a life changer. Their service is outstanding! And on the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
    img: UserDp,
  },
  {
    id: 3,
    name: "Jane Smith",
    location: "Islamabad, Pakistan",
    text: "“Highly recommended! Professional and reliable.”",
    img: UserDp,
  },
];

const CARD_HEIGHT = 245;
const OVERLAP = -150;
const SHIFT_RIGHT = 40;

const Testimonial = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState(0);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setDirection(1);
    setActiveIdx((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (e) => {
    const idx = Number(e.currentTarget.getAttribute('data-index'))
    if(idx === activeIdx) return;
    setDirection(idx > activeIdx ? 1 : -1);
    setActiveIdx(idx)
  }
  

  // Indices for the two visible cards
  const frontIdx = activeIdx;
  const backIdx = (activeIdx + 1) % testimonials.length;

  return (
    <div className="font-poppin px-4 mx-[140px] mt-[200px] max-xl:mx-20 max-lg:mx-8 max-sm:mt-[100px]">
      <div className="text-[#5E6282] text-lg font-semibold mb-2">
        Testimonials
      </div>

      <div className="flex justify-between gap-14 max-lg:flex-col">
        <div className="flex flex-col gap-20 font-volkhov font-bold text-3xl w-[40%] text-[50px] text-[#14183E] mb-8 max-lg:w-full  max-lg:text-5xl max-sm:text-4xl max-sm:gap-10">
          <div >
            What People Say About Us.
          </div>
          {/* Dots */}
          <div className="flex gap-7 max-sm:gap-4">
            {testimonials.map((_, idx) => (
              <div
                key={idx}
                className={`w-3 h-3 rounded-full cursor-pointer ${activeIdx === idx ? "bg-[#39425D]" : "bg-[#E5E5E5]"}`}
                data-index={idx}
                onClick={handleDotClick}
              />
            ))}
          </div>
        </div>

        <div
          className="relative flex flex-col items-center max-xl:!w-[400px] max-lg:!w-[70%] max-lg:mx-auto max-sm:!w-[80%]"
          style={{ width: 500, height: CARD_HEIGHT * 2 + OVERLAP }}
        >
          {/* Navigation Buttons on the right side */}
          <div className="absolute top-1/2 -right-[100px] -translate-y-1/2 flex flex-col gap-4 z-10 max-xl:-right-[60px]">
            <button
              className="bg-white cursor-pointer shadow rounded-full w-10 h-10 flex items-center justify-center border border-gray-200 hover:bg-gray-100 transition"
              onClick={handlePrev}
              aria-label="Previous testimonial"
            >
              <div className="rotate-180">
                <DownArrow />
              </div>
            </button>
            <button
              className="bg-white cursor-pointer shadow rounded-full w-10 h-10 flex items-center justify-center border border-gray-200 hover:bg-gray-100 transition"
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              <DownArrow />
            </button>
          </div>
          <div className="relative w-full h-full">
            {/* Back card with framer-motion */}
            <AnimatePresence initial={false}>
              <motion.div
                key={testimonials[backIdx].id}
                initial={{ opacity: 0, y: 60, x: SHIFT_RIGHT }}
                animate={{
                  opacity: 0.7,
                  y: CARD_HEIGHT + OVERLAP,
                  x: SHIFT_RIGHT,
                  scale: 0.96,
                }}
                exit={{ opacity: 0, y: 60, x: SHIFT_RIGHT }}
                transition={{ duration: 0.45, type: "spring" }}
                className="absolute left-0 w-full"
                style={{ pointerEvents: "none", zIndex: 1 }}
              >
                <TestinomialCard {...testimonials[backIdx]} />
              </motion.div>
            </AnimatePresence>
            {/* Front card with framer-motion */}
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={testimonials[frontIdx].id}
                custom={direction}
                initial={{
                  opacity: 0,
                  y: direction > 0 ? -60 : 60,
                  scale: 0.97,
                }}
                animate={{ opacity: 1, y: 0, scale: 1.05 }}
                exit={{ opacity: 0, y: direction > 0 ? 60 : -60, scale: 0.97 }}
                transition={{ duration: 0.45, type: "spring" }}
                className="absolute left-0 w-full"
                style={{ zIndex: 2 }}
              >
                <TestinomialCard {...testimonials[frontIdx]} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
