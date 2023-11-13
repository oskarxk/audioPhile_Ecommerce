import React from 'react'
import { Navigation } from 'components/Navigation/Navigation'
import { Link } from 'react-router-dom'
import { Footer } from 'shared/Footer/Footer'

import headerImageMobile from 'Assets/home/mobile/image-header.jpg'
import headerImageDesktop from 'Assets/home/desktop/image-hero.jpg'

export const OrderSuccess = () => {
  return (
    <div className="flex flex-col w-full">
      <Navigation />
      <div className="relative">
        <div className="absolute inset-0 flex flex-col justify-center lg:px-40">
          <p className="text-sm lg:text-5xl font-semibold lg:font-bold text-center lg:text-left mb-2 lg:mb-4 tracking-widest text-[#808080]">
            ORDER SUCCESS
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-center lg:text-left mb-4 lg:w-1/2 text-[#FFFFFF]">
            Thank you for your purchase!
          </h2>
          <p className="text-center lg:text-left lg:px-0 lg:text-lg lg:w-1/3 px-8 pt-2 text-[#F1F1F1]">
            We appreciate your trust in us. Your order has been successfully
            placed and confirmed. Our team is already working hard to prepare
            your items for shipping. If you have any questions or need
            assistance, feel free to reach out to our customer support.
          </p>
          <div className="w-full flex justify-center lg:justify-start mt-14">
            <Link className="py-4" to={'/'}>
              <button className="h-25 bg-[#D87D4A] text-white font-bold py-2 px-4 hover:bg-[#fbaf85]">
                GO TO HOME PAGE
              </button>
            </Link>
          </div>
        </div>
        <img
          className="block w-full"
          src={headerImageMobile}
          srcSet={`${headerImageMobile} 1024w, ${headerImageDesktop} 1280w`}
          alt="Hero"
        />
      </div>
      <Footer />
    </div>
  )
}
