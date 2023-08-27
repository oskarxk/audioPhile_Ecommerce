import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/useTypedSelector'
import { Link } from 'react-router-dom'
import { Navigation } from 'components/Navigation/Navigation'
import { Footer } from 'shared/Footer/Footer'
import axios from 'axios'
import { Product, ProductState } from 'types/product'
import { cartActions } from 'store/Cart'
import { OrderNotification } from './OrderNotification'

export const PaymentFinalization = () => {
  const { products } = useAppSelector((state) => state.cm)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  type Price = {
    total?: number
    shippingCost?: number
    vatIncluded?: number
    grandTotal?: number
  }

  type Order = {
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
    total: number | undefined
    shipping: number | undefined
    vat: number | undefined
    grandTotal: number | undefined
    items: OrderItem[]
  }

  const [totalPrice, setTotalPrice] = useState<Price>({
    total: 0,
    shippingCost: 0,
    vatIncluded: 0,
    grandTotal: 0,
  })

  const [payment, setPayment] = useState<string>('emoney')

  useEffect(() => {
    const sum = products.reduce<number>(
      (acc: number, product: ProductState) => {
        acc += product.price * product.quantity
        return acc
      },
      0
    )

    const totalPrice = sum
    const calculatedShippingCost = 50
    const calculatedVatIncluded = totalPrice * 0.23
    const calculatedGrandTotal =
      totalPrice + calculatedShippingCost + calculatedVatIncluded

    setTotalPrice({
      total: totalPrice,
      shippingCost: calculatedShippingCost,
      vatIncluded: calculatedVatIncluded,
      grandTotal: calculatedGrandTotal,
    })

    setOrderInfo((prevOrderInfo) => ({
      ...prevOrderInfo,
      total: totalPrice,
      shipping: calculatedShippingCost,
      vat: calculatedVatIncluded,
      grandTotal: calculatedGrandTotal,
    }))
  }, [products])

  type OrderItem = Product & {
    quantity: number
    priceId: string
  }

  const [orderInfo, setOrderInfo] = useState<Order>({
    name: '',
    phoneNumber: '',
    email: '',
    address: '',
    zipCode: '',
    country: '',
    city: '',
    paymentMethod: payment,
    emoneyNumber: '',
    emoneyPIN: '',
    total: totalPrice.total,
    shipping: totalPrice.shippingCost,
    vat: totalPrice.vatIncluded,
    grandTotal: totalPrice.grandTotal,
    items: products as OrderItem[],
  })

  const [isOrderInfoComplete, setIsOrderInfoComplete] = useState(false)
  const [infoMessage, setInfoMessage] = useState('')
  const [showMessage, setShowMessage] = useState(false)

  useEffect(() => {
    const isComplete =
      orderInfo.name !== '' &&
      orderInfo.email !== '' &&
      orderInfo.phoneNumber !== '' &&
      orderInfo.address !== '' &&
      orderInfo.zipCode !== '' &&
      orderInfo.city !== '' &&
      orderInfo.country !== '' &&
      orderInfo.emoneyNumber !== '' &&
      orderInfo.emoneyPIN !== ''

    setIsOrderInfoComplete(isComplete)
  }, [orderInfo])

  const handleOrderConfirmation = async () => {
    if (isOrderInfoComplete && products.length > 0) {
      try {
        await axios.post('http://localhost:5000/createOrder', orderInfo)
        dispatch(cartActions.removeAll())

        const response = await axios.post('http://localhost:4242/checkout', {
          items: products,
          customerEmail: orderInfo.email,
        })
        console.log(response.data.url)
        window.location.href = response.data.url
      } catch (error) {
        // obsługa błędu
        console.error('Error sending order:', error)
      }
    } else {
      if (!isOrderInfoComplete) {
        setInfoMessage('Wypełnij wszystkie dane do zamówienia!')
      } else if (products.length === 0) {
        setInfoMessage('Nie masz produktów w koszyku!')
      }
      setShowMessage(true)
      setTimeout(() => {
        setShowMessage(false)
        setInfoMessage('')
      }, 3000)
    }
  }

  return (
    <div className="flex flex-col w-full justify-center bg-[#F1F1F1]">
      <Navigation />
      <div className="flex justify-center">
        {showMessage && <OrderNotification infoMessage={infoMessage} />}
      </div>
      <div className="flex w-full items-center justify-center py-4">
        <button
          onClick={() => navigate(-1)}
          className="w-3/4 text-[#808080] text-sm text-left"
        >
          Go Back
        </button>
      </div>
      <div className="flex flex-col w-full justify-center items-center bg-[#F1F1F1] py-4">
        <div className="flex flex-col lg:flex-row w-full lg:w-3/4 items-center lg:items-start justify-between bg-[#F1F1F1] ">
          <div className="w-3/4 lg:w-8/12 bg-white rounded-md px-8 py-8">
            <div className="w-full">
              <p className="text-black text-left text-3xl font-bold mb-8">
                CHECKOUT
              </p>
            </div>
            <div className="w-full flex flex-col">
              <div>
                <p className="text-[#D87D4A] text-left text-sm font-bold my-4">
                  BILLING DETAILS
                </p>
              </div>
              <div className="flex flex-col lg:flex-row w-full justify-between">
                <div className="w-full lg:w-5/12">
                  <div className="flex flex-col">
                    <p className="text-left font-semibold py-2">Name</p>
                    <input
                      className={`py-4 border-2 rounded-md outline-none pl-4 ${
                        !isOrderInfoComplete && orderInfo.name === ''
                          ? ' border-red-600'
                          : 'border-[#F1F1F1]'
                      }`}
                      type="text"
                      onChange={(event) =>
                        setOrderInfo({
                          ...orderInfo,
                          name: event.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-left font-semibold py-2">Phone Number</p>
                    <input
                      className={`py-4 border-2 rounded-md outline-none pl-4 ${
                        !isOrderInfoComplete && orderInfo.phoneNumber === ''
                          ? ' border-red-600 '
                          : 'border-[#F1F1F1]'
                      }`}
                      type="tel"
                      onChange={(event) =>
                        setOrderInfo({
                          ...orderInfo,
                          phoneNumber: event.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="w-full lg:w-5/12	">
                  <div className="flex flex-col">
                    <p className="text-left font-semibold py-2">Email Adress</p>
                    <input
                      className={`py-4 border-2 rounded-md outline-none pl-4 ${
                        !isOrderInfoComplete && orderInfo.email === ''
                          ? ' border-red-600 '
                          : 'border-[#F1F1F1]'
                      }`}
                      type="text"
                      value={orderInfo.email}
                      onChange={(event) =>
                        setOrderInfo({
                          ...orderInfo,
                          email: event.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col">
              <div>
                <p className="text-[#D87D4A] text-left text-sm font-bold my-4">
                  SHIPPING INFO
                </p>
              </div>
              <div className="flex flex-col w-full justify-between">
                <div className="w-full">
                  <div className="flex flex-col">
                    <p className="text-left font-semibold py-2">Address</p>
                    <input
                      className={`py-4 border-2 rounded-md outline-none pl-4 ${
                        !isOrderInfoComplete && orderInfo.address === ''
                          ? ' border-red-600 '
                          : 'border-[#F1F1F1]'
                      }`}
                      type="text"
                      value={orderInfo.address}
                      onChange={(event) =>
                        setOrderInfo({
                          ...orderInfo,
                          address: event.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row w-full justify-between">
                <div className="w-full lg:w-5/12">
                  <div className="flex flex-col">
                    <p className="text-left font-semibold py-2">ZIP Code</p>
                    <input
                      className={`py-4 border-2 rounded-md outline-none pl-4 ${
                        !isOrderInfoComplete && orderInfo.zipCode === ''
                          ? ' border-red-600'
                          : 'border-[#F1F1F1]'
                      }`}
                      type="text"
                      value={orderInfo.zipCode}
                      onChange={(event) =>
                        setOrderInfo({
                          ...orderInfo,
                          zipCode: event.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-left font-semibold py-2">Country</p>
                    <input
                      className={`py-4 border-2 rounded-md outline-none pl-4 ${
                        !isOrderInfoComplete && orderInfo.country === ''
                          ? ' border-red-600 '
                          : 'border-[#F1F1F1]'
                      }`}
                      type="text"
                      value={orderInfo.country}
                      onChange={(event) =>
                        setOrderInfo({
                          ...orderInfo,
                          country: event.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="w-full lg:w-5/12">
                  <div className="flex flex-col">
                    <p className="text-left font-semibold py-2">City</p>
                    <input
                      className={`py-4 border-2 rounded-md outline-none pl-4 ${
                        !isOrderInfoComplete && orderInfo.city === ''
                          ? ' border-red-600 '
                          : 'border-[#F1F1F1]'
                      }`}
                      type="text"
                      value={orderInfo.city}
                      onChange={(event) =>
                        setOrderInfo({
                          ...orderInfo,
                          city: event.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col">
              <div>
                <p className="text-[#D87D4A] text-left text-sm font-bold my-4">
                  PAYMENT DETAILS
                </p>
              </div>
              <div className="flex flex-col lg:flex-row w-full justify-between">
                <div className="w-full lg:w-5/12">
                  <div className="flex flex-col">
                    <p className="text-left font-semibold py-2">
                      Payment Method
                    </p>
                  </div>
                </div>
                <div className="w-full lg:w-5/12">
                  <div className="flex flex-col">
                    <div
                      className={`flex items-center py-6 my-2 border-2 ${
                        payment === 'emoney'
                          ? 'border-[#D87D4A]'
                          : 'border-[#F1F1F1]'
                      } rounded-md outline-none`}
                      onClick={() => {
                        setPayment('emoney')
                        setOrderInfo({
                          ...orderInfo,
                          paymentMethod: 'emoney',
                        })
                      }}
                    >
                      <div className="flex justify-center items-center h-6 w-6 ml-8 rounded-full border-2 border-[#F1F1F1]">
                        {payment === 'emoney' && (
                          <div className=" h-4 w-4 bg-[#D87D4A] rounded-full"></div>
                        )}
                      </div>
                      <p className="font-bold px-8">e-Money</p>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div
                      className={`flex items-center py-6 my-2 border-2 ${
                        payment === 'cash'
                          ? 'border-[#D87D4A]'
                          : 'border-[#F1F1F1]'
                      } rounded-md outline-none`}
                      onClick={() => {
                        setPayment('cash')
                        setOrderInfo({
                          ...orderInfo,
                          paymentMethod: 'cash',
                        })
                      }}
                    >
                      <div className="flex justify-center items-center h-6 w-6 ml-8 rounded-full border-2 border-[#F1F1F1]">
                        {payment === 'cash' && (
                          <div className=" h-4 w-4 bg-[#D87D4A] rounded-full"></div>
                        )}
                      </div>
                      <p className="font-bold px-8">Cash on delivery</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row justify-between w-full">
                <div className="flex flex-col w-full lg:w-5/12">
                  <p className="text-left font-semibold py-2">e-Money Number</p>
                  <input
                    className={`py-4 border-2 rounded-md outline-none pl-4 ${
                      !isOrderInfoComplete && orderInfo.emoneyNumber === ''
                        ? ' border-red-600 '
                        : 'border-[#F1F1F1]'
                    }`}
                    type="number"
                    value={orderInfo.emoneyNumber}
                    onChange={(event) =>
                      setOrderInfo({
                        ...orderInfo,
                        emoneyNumber: event.target.value,
                      })
                    }
                  />
                </div>
                <div className="flex flex-col w-full lg:w-5/12">
                  <p className="text-left font-semibold py-2">e-Money PIN</p>
                  <input
                    className={`py-4 border-2 rounded-md outline-none pl-4 ${
                      !isOrderInfoComplete && orderInfo.emoneyPIN === ''
                        ? ' border-red-600 '
                        : 'border-[#F1F1F1]'
                    }`}
                    type="number"
                    value={orderInfo.emoneyPIN}
                    onChange={(event) =>
                      setOrderInfo({
                        ...orderInfo,
                        emoneyPIN: event.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-3/4 lg:w-3/12 h-max bg-white rounded-md flex flex-col px-5 py-5 mt-4 lg:mt-0">
            <div className="flex">
              <div className="w-1/2 text-left">
                <p className="font-bold tracking-wide">SUMMARY</p>
              </div>
            </div>
            {products &&
              products.map((product: ProductState) => (
                <div className="w-full my-2">
                  <div className="flex justify-between items-center w-full">
                    <div className="w-1/4">
                      <img
                        src={product.imageCart}
                        alt="Zdjecie produktu"
                        className="rounded-md"
                      />
                    </div>
                    <div className="flex flex-col justify-center w-2/4 mx-2">
                      <p className="font-bold text-left">{product.shortName}</p>
                      <p className="text-left text-[#808080]">{`$ ${product.price}`}</p>
                    </div>
                    <div className="flex justify-center items-center">
                      <div className="flex justify-center items-center">
                        <p className="px-2 py-1">x{product.quantity}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            <div className="flex my-2">
              <div className="w-1/2 text-left">
                <p className="text-[#808080] text-sm">TOTAL:</p>
              </div>
              <div className="w-1/2 text-right">
                <p className="font-bold tracking-wide">$ {totalPrice.total}</p>
              </div>
            </div>
            <div className="flex my-2">
              <div className="w-1/2 text-left">
                <p className="text-[#808080] text-sm">SHIPPING</p>
              </div>
              <div className="w-1/2 text-right">
                <p className="font-bold tracking-wide">
                  $ {totalPrice.shippingCost}
                </p>
              </div>
            </div>
            <div className="flex my-2">
              <div className="w-1/2 text-left">
                <p className="text-[#808080] text-sm">VAT (INCLUDED)</p>
              </div>
              <div className="w-1/2 text-right">
                <p className="font-bold tracking-wide">
                  ${totalPrice.total?.toFixed(2)}
                </p>
              </div>
            </div>
            <div className="flex my-2">
              <div className="w-1/2 text-left">
                <p className="text-[#808080] text-sm">GRAND TOTAL</p>
              </div>
              <div className="w-1/2 text-right">
                <p className="font-bold tracking-wide">
                  ${totalPrice.grandTotal?.toFixed(2)}
                </p>
              </div>
            </div>
            <div className="w-full">
              <Link to={`/payment`}>
                <button
                  className={`bg-[#D87D4A] hover:bg-[#fbaf85] text-white w-full py-2 font-bold text-sm ${
                    isOrderInfoComplete && products.length > 0
                      ? ''
                      : 'cursor-not-allowed opacity-50'
                  }`}
                  onClick={handleOrderConfirmation}
                >
                  CONTINUE & PAY
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
