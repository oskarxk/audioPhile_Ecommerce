import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { useAppSelector, useAppDispatch } from 'hooks/useTypedSelector'
import { cartActions } from '../store/Cart'
import { CartItem } from 'modules/Cart/CartItem'

import { uiActions } from 'store/CartVisibility'
import { ProductState } from 'types/product'

export const Cart = () => {
  const [totalPrice, setTotalPrice] = useState<number>(0)
  const { products } = useAppSelector((state) => state.cm)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const sum = products.reduce((acc: number, product: ProductState) => {
      acc += product.price * product.quantity
      return acc
    }, 0)
    setTotalPrice(sum)
  }, [products])

  const removeAllItemsFromCart = useCallback(() => {
    dispatch(cartActions.removeAll())
  }, [])

  const toggleCartHandler = useCallback(() => {
    dispatch(uiActions.toggle())
  }, [])

  return (
    <div className="w-80 h-max bg-[#FFFFFF] rounded-md flex flex-col px-5 py-5 lg:mr-24 mt-40 lg:mt-40">
      <div className="flex">
        <div className="w-1/2 text-left">
          <p className="font-bold tracking-wide">CART ({products.length})</p>
        </div>
        <div className="w-1/2 text-right">
          <button
            className="text-[#808080] underline underline-offset-1 text-sm"
            onClick={removeAllItemsFromCart}
          >
            Remove All
          </button>
        </div>
      </div>
      <CartItem />
      <div className="flex my-6">
        <div className="w-1/2 text-left">
          <p className="text-[#808080]">Total:</p>
        </div>
        <div className="w-1/2 text-right">
          <p className="font-bold tracking-wide">$ {totalPrice}</p>
        </div>
      </div>
      <div className="w-full">
        <Link to={`/payment`}>
          <button
            className="bg-[#D87D4A] text-white w-full py-2 font-bold text-sm"
            onClick={toggleCartHandler}
          >
            CHECKOUT
          </button>
        </Link>
      </div>
    </div>
  )
}
