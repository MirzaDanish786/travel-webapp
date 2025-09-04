import React, { useState } from 'react'
import PlayButton from '../../assets/icons/playBtn.svg?react'

const PlayBtn = () => {
  const [isHover, setIsHover] = useState(false)
  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className=' flex items-center gap-5 font-normal text-[17px] text-[#686D77] cursor-pointer'
    >
      <button
        className={`playBtn rounded-full 
          p-5 flex justify-center items-center cursor-pointer outline-1 transition-all duration-300
          ${isHover ? 'bg-white outline outline-[#DF6951]' : 'bg-[#DF6951] outline-white'}
        `}
      >
        <PlayButton className={`${isHover ? 'text-[#DF6951]' : 'text-white'} transition-all duration-300`} />
      </button>
      <div>Play Demo</div>
    </div>
  )
}

export default PlayBtn