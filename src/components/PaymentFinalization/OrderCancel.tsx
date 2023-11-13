import React from 'react'
import { Navigation } from 'components/Navigation/Navigation'
import { Link } from 'react-router-dom'
import { Footer } from 'shared/Footer/Footer'

import headerImageMobile from 'Assets/home/mobile/image-header.jpg'
import headerImageDesktop from 'Assets/home/desktop/image-hero.jpg'

export const OrderCancel = () => {
  return (
    <div className="flex flex-col w-full">
      <Navigation />
      <div className="relative">
        <div className="absolute inset-0 flex flex-col justify-center lg:px-40">
          <p className="text-sm lg:text-5xl font-semibold lg:font-bold text-center lg:text-left mb-2 lg:mb-4 tracking-widest text-[#808080]">
            ORDER CANCELED
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-center lg:text-left mb-4 lg:w-1/2 text-[#FFFFFF]">
            We noticed there was an issue with your payment for the order
          </h2>
          <p className="text-center lg:text-left lg:px-0 lg:text-lg lg:w-1/3 px-8 pt-2 text-[#F1F1F1]">
            It appears that there was a payment error during the processing of
            your order. We apologize for any inconvenience this may have caused.
            Please double-check your payment information to ensure its accuracy,
            or you may want to try an alternative payment method. If you
            encounter any difficulties or need assistance, please feel free to
            reach out to our customer support. We're here to help resolve any
            issues you might be facing.
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
