import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

import Logo1 from '../../assets/images/Logo1.png'
import Logo2 from '../../assets/images/Logo2.png'
import Logo3 from '../../assets/images/Logo3.png'
import Logo4 from '../../assets/images/Logo4.png'
import Logo5 from '../../assets/images/Logo5.png'
import Logo6 from '../../assets/images/Logo1.png'

const logos = [Logo1, Logo2, Logo6, Logo4, Logo5, Logo3]

const CompaniesSlider = () => {
  return (
    <div className="mx-[140px] mt-[96px] mb-[100px] max-sm:my-[50px] max-sm:w-full max-sm:mx-0">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        // slidesPerView={5}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={2000}
        className="companies-swiper"
        breakpoints={{
          0: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          // 480: {
          //   slidesPerView: 2,
          //   spaceBetween: 20,
          // },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          }
        }}
      >
        {logos.map((logo, idx) => (
          <SwiperSlide key={idx} className="company-slide">
            <div className="company-logo-wrapper flex justify-center items-center">
              <img src={logo} alt={`Company logo ${idx + 1}`} className="w-[200px] h-[100px] company-logo object-contain max-sm:w-[120px] max-sm:h-[80px]" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default CompaniesSlider