import React, { useState, useCallback } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HiMenu } from 'react-icons/hi'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Logo } from './Logo/Logo'

import { useDispatch, useSelector } from 'react-redux'
import { uiActions } from '../../store/CartVisibility'
import { useAppSelector } from 'hooks/useTypedSelector'
import { ProductState } from 'types/product'

import {
  HOME_ROUTE,
  SPEAKERS_ROUTE,
  HEADPHONES_ROUTE,
  EARPHONES_ROUTE,
} from './routes'

export const MobileMenu = () => {
  const [showMenu, setShowMenu] = useState(false)
  const { products } = useAppSelector((state) => state.cm)
  const showCart = useSelector((state: any) => state.ui.cartIsVisible)

  const handleMenuClick = () => {
    setShowMenu(!showMenu)
    if (showCart === true) {
      dispatch(uiActions.toggle())
    }
  }

  const dispatch = useDispatch()
  const toggleCartHandler = useCallback(() => {
    dispatch(uiActions.toggle())
    setShowMenu(false)
  }, [dispatch])

  const sum = products.reduce<number>((acc: number, product: ProductState) => {
    acc += product.quantity
    return acc
  }, 0)

  return (
    <nav className={`flex items-center justify-around bg-[#101010] py-6`}>
      <div>
        <HiMenu className="text-white text-2xl" onClick={handleMenuClick} />
      </div>
      <div>
        <Link to={HOME_ROUTE} aria-label="Home">
          <Logo />
        </Link>
      </div>
      <div onClick={toggleCartHandler} className="cursor-pointer flex items-center justify-center">
        <AiOutlineShoppingCart className="text-white text-2xl" />
        {products.length > 0 && (
          <div className=" w-6 h-6 rounded-xl bg-[#D87D4A] text-white font-bold">
            {sum}
          </div>
        )}
      </div>
      <div
        className={`absolute w-full left-0 top-16 bg-[#101010] z-10 ${
          showMenu ? 'block' : 'hidden'
        }`}
      >
        <div className="flex flex-col space-y-4 px-4 py-8">
          <NavLink
            to={HOME_ROUTE}
            aria-label="Home"
            style={({ isActive }) => ({
              color: isActive ? '#D87D4A' : 'white',
            })}
            onClick={handleMenuClick}
          >
            HOME
          </NavLink>
          <NavLink
            to={SPEAKERS_ROUTE}
            aria-label="SPEAKERS"
            style={({ isActive }) => ({
              color: isActive ? '#D87D4A' : 'white',
            })}
            onClick={handleMenuClick}
          >
            SPEAKERS
          </NavLink>
          <NavLink
            to={HEADPHONES_ROUTE}
            aria-label="HEADPHONES"
            style={({ isActive }) => ({
              color: isActive ? '#D87D4A' : 'white',
            })}
            onClick={handleMenuClick}
          >
            HEADPHONES
          </NavLink>
          <NavLink
            to={EARPHONES_ROUTE}
            aria-label="EARPHONES"
            style={({ isActive }) => ({
              color: isActive ? '#D87D4A' : 'white',
            })}
            onClick={handleMenuClick}
          >
            EARPHONES
          </NavLink>
        </div>
      </div>
    </nav>
  )
}
