import React from 'react'
import { AiOutlineRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'

import itemHeadphones from 'Assets/home/cart/image-removebg-headphones.png'
import itemSpeakers from 'Assets/home/cart/image-removebg-speaker.png'
import itemEarphones from 'Assets/home/cart/image-removebg-earphones.png'

export const CategoryLink = () => {
  return (
    <div className="flex justify-center items-center lg:flex-row">
      <div className="flex flex-col lg:flex-row justify-between items-center my-8 w-3/4">
        <div className="h-36 w-3/4 lg:w-1/5 bg-[#F1F1F1] my-8 flex flex-col justify-end items-center relative rounded-xl">
          <img
            className="absolute left-1/2 transform -translate-x-1/2 -translate-y-24"
            src={itemHeadphones}
            alt="headphones"
          />
          <p className="text-[#101010] font-bold tracking-wider	">HEADPHONES</p>
          <div className="flex flex-row items-center">
            <Link className="py-4" to={'/headphones'}>
              <p className=" text-[#808080] font-bold">SHOP</p>
            </Link>
            <AiOutlineRight className=" text-[#D87D4A] font-bold" />
          </div>
        </div>
        <div className="h-36 w-3/4 lg:w-1/5 bg-[#F1F1F1] my-8 flex flex-col justify-end items-center relative rounded-xl">
          <img
            className="absolute left-1/2 transform -translate-x-1/2 -translate-y-24"
            src={itemSpeakers}
            alt="speakers"
          />
          <p className="text-[#101010] font-bold tracking-wider	">SPEAKERS</p>
          <div className="flex flex-row items-center">
            <Link className="py-4" to={'/speakers'}>
              <p className=" text-[#808080] font-bold">SHOP</p>
            </Link>
            <AiOutlineRight className=" text-[#D87D4A] font-bold" />
          </div>
        </div>
        <div className="h-36 w-3/4 lg:w-1/5 bg-[#F1F1F1] my-8 flex flex-col justify-end items-center relative rounded-xl">
          <img
            className="absolute left-1/2 transform -translate-x-1/2 -translate-y-24"
            src={itemEarphones}
            alt="earphones"
          />
          <p className="text-[#101010] font-bold tracking-wider	">EARPHONES</p>
          <div className="flex flex-row items-center">
            <Link className="py-4" to={'/earphones'}>
              <p className=" text-[#808080] font-bold">SHOP</p>
            </Link>
            <AiOutlineRight className=" text-[#D87D4A] font-bold" />
          </div>
        </div>
      </div>
    </div>
  )
}
