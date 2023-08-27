import React, { useCallback } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Logo } from './Logo/Logo'

import { useDispatch } from 'react-redux'
import { uiActions } from '../../store/CartVisibility'
import { useAppSelector } from 'hooks/useTypedSelector'

import { ProductState } from 'types/product'

import {
  HOME_ROUTE,
  SPEAKERS_ROUTE,
  HEADPHONES_ROUTE,
  EARPHONES_ROUTE,
} from './routes'

export const DesktopMenu = () => {
  const { products } = useAppSelector((state) => state.cm)
  const dispatch = useDispatch()
  const toggleCartHandler = useCallback(() => {
    dispatch(uiActions.toggle())
  }, [])

  const sum = products.reduce<number>((acc: number, product: ProductState) => {
    acc += product.quantity
    return acc
  }, 0)

  return (
    <nav className={`flex items-center justify-around bg-[#101010] py-6`}>
      <div>
        <Link to={HOME_ROUTE} aria-label="Home">
          <Logo />
        </Link>
      </div>
      <div className="flex items-center justify-center space-x-8">
        <NavLink
          to={HOME_ROUTE}
          aria-label="Home"
          className="text-xl"
          style={({ isActive }) => ({
            color: isActive ? '#D87D4A' : 'white',
          })}
        >
          HOME
        </NavLink>
        <NavLink
          to={SPEAKERS_ROUTE}
          aria-label="SPEAKERS"
          className="text-xl"
          style={({ isActive }) => ({
            color: isActive ? '#D87D4A' : 'white',
          })}
        >
          SPEAKERS
        </NavLink>
        <NavLink
          to={HEADPHONES_ROUTE}
          aria-label="HEADPHONES"
          className="text-xl"
          style={({ isActive }) => ({
            color: isActive ? '#D87D4A' : 'white',
          })}
        >
          HEADPHONES
        </NavLink>
        <NavLink
          to={EARPHONES_ROUTE}
          aria-label="EARPHONES"
          className="text-xl"
          style={({ isActive }) => ({
            color: isActive ? '#D87D4A' : 'white',
          })}
        >
          EARPHONES
        </NavLink>
      </div>
      <div
        onClick={toggleCartHandler}
        className="cursor-pointer flex items-center justify-center"
      >
        <AiOutlineShoppingCart className="text-white text-2xl" />
        {products.length > 0 && (
          <div className=" w-6 h-6 rounded-xl bg-[#D87D4A] text-white font-bold">
            {sum}
          </div>
        )}
      </div>
    </nav>
  )
}
