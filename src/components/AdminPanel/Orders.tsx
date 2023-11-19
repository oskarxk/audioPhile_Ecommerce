import React, { useEffect, useState } from 'react'
import { AdminPanelNav } from './AdminPanelNav'
import axios from 'axios'
import { OrderDetails } from './OrderDetails'

type Props = {}

export const Orders = (props: Props) => {
  type Order = [
    {
      orderNumber: string
      orderDate: string
      orderTime: string
      name: string
      email: string
      phoneNumber: string
      address: string
      zipCode: string
      city: string
      country: string
      paymentMethod: string
      emoneyNumber: string
      emoneyPIN: string
      total: number
      shipping: number
      vat: number
      grandTotal: number
      items: Array<{
        _id: number
        name: string
        price: number
        quantity: number
        imageCart: string
      }>
    }
  ]

  const [orders, setOrders] = useState<Order>()

  useEffect(() => {
    axios
      .get('https://audio-store-ordersserver-backend.onrender.com/orders')
      .then((response) => {
        setOrders(response.data)
      })
      .catch((error) => {
        console.error('Error fetching orders:', error)
      })
  }, [])

  const [orderViews, setOrderViews] = useState<Set<string>>(new Set<string>())

  const handleSeeMoreClick = (orderNumber: string) => {
    if (orderViews.has(orderNumber))
      setOrderViews((orderViews) => {
        orderViews.delete(orderNumber)
        return new Set(orderViews)
      })
    else
      setOrderViews((orderViews) => {
        orderViews.add(orderNumber)
        return new Set(orderViews)
      })
  }

  return (
    <div className="w-full">
      <AdminPanelNav />
      <div className="flex w-full items-center bg-[#101010] text-[#FFFFFF] py-6">
        <div className="w-4/5 flex justify-around">
          <p className="w-1/4">ORDER NUMBER</p>
          <p className="w-1/4">ORDER NAME</p>
          <p className="w-1/4">ORDER TOTAL</p>
          <p className="w-1/4">ORDER DATE</p>
          <p className="w-1/4">ORDER TIME</p>
        </div>
      </div>
      {orders?.map((order, index) => (
        <div
          className="w-full flex flex-col justify-between bg-[#F1F1F1] rounded-xl my-2"
          key={order.orderNumber}
        >
          <div className="w-full flex">
            <div className="flex w-4/5 justify-around items-center">
              <p className=" text-black w-1/4">{order.orderNumber}</p>
              <p className=" text-black w-1/4">{order.name}</p>
              <p className=" text-black w-1/4">
                $ {order.grandTotal.toFixed(2)}
              </p>
              <p className=" text-black w-1/4">{order.orderDate}</p>
              <p className=" text-black w-1/4">{order.orderTime}</p>
            </div>
            <div className="flex flex-col justify-center items-center w-1/5 my-2">
              <button
                className=" uppercase font-bold text-l text-[#FFFFFF] bg-red-600 px-2 py-2 my-2 rounded-xl"
                onClick={() => handleSeeMoreClick(order.orderNumber)}
              >
                SEE MORE
              </button>
            </div>
          </div>
          {orderViews.has(order.orderNumber) && <OrderDetails order={order} />}
        </div>
      ))}
    </div>
  )
}
