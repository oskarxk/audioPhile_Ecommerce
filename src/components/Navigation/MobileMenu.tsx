import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiMenu } from 'react-icons/hi'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Logo } from './Logo/Logo'
import { Cart } from 'modules/Cart/Cart'

import { useDispatch, useSelector } from 'react-redux'
import { uiActions } from '../../store/CartVisibility'

export const MobileMenu = () => {
  const [showMenu, setShowMenu] = useState(false)

  const handleMenuClick = () => {
    setShowMenu(!showMenu)
  }

  const dispatch = useDispatch()
  const toggleCartHandler = () => {
    dispatch(uiActions.toggle())
  }

  const showCart = useSelector((state: any) => state.ui.cartIsVisible)

  return (
    <nav className={`flex items-center justify-around bg-[#101010] py-6`}>
      <div>
        <HiMenu className="text-white text-2xl" onClick={handleMenuClick} />
      </div>
      <div>
        <Logo />
      </div>
      <div onClick={toggleCartHandler} className="cursor-pointer">
        <AiOutlineShoppingCart className="text-white text-2xl" />
      </div>
      {showCart && <Cart />}
      <div
        className={`absolute w-full left-0 top-16 bg-[#101010] z-10 ${
          showMenu ? 'block' : 'hidden'
        }`}
      >
        <div className="flex flex-col space-y-4 px-4 py-8">
          <Link to={'/'}>
            <p className="text-white" onClick={handleMenuClick}>
              HOME
            </p>
          </Link>
          <Link to={'/speakers'}>
            <p className="text-white" onClick={handleMenuClick}>
              SPEAKERS
            </p>
          </Link>
          <Link to={'/headphones'}>
            <p className="text-white" onClick={handleMenuClick}>
              HEADPHONES
            </p>
          </Link>
          <Link to={'/earphones'}>
            <p className="text-white" onClick={handleMenuClick}>
              EARPHONES
            </p>
          </Link>
        </div>
      </div>
    </nav>
  )
}
