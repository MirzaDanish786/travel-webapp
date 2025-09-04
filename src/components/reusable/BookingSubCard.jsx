import React from 'react'
import BookingSubCardImg from '../../assets/images/BookingSubCard.png'
import BookingSubCardLoadingImg from '../../assets/images/BookingSubCardLoading.png'
const BookingSubCard = () => {
  return (
    <div className='font-poppin flex gap-3 bg-white shadow-card rounded-[18px] w-[263px] h-[129px] p-5 items-center max-xl:w-[250px] max-xl:h-[110px]'>
      <div className='rounded-full overflow-hidden w-[66px] h-[66px]'>
        <img className='w-full' src={BookingSubCardImg} alt="" />
      </div>
      <div className='flex flex-col gap-2'>
        <div>
        <div className='text-sm text-[#84829A]'>Ongoing</div>
        <div className='text-[#080809] text-lg '>Trip to rome</div>
        </div>
        <div className='text-sm'><span className='text-purple-400'>40%</span> completed</div>
        <div><img src={BookingSubCardLoadingImg} alt="" /></div>
      </div>
    </div>
  )
}

export default BookingSubCard
