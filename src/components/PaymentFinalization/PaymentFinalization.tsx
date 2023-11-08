import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/useTypedSelector'
import { Navigation } from 'components/Navigation/Navigation'
import { Footer } from 'shared/Footer/Footer'
import axios from 'axios'
import { ProductState } from 'types/product'
import { cartActions } from 'store/Cart'


import { useFormik } from 'formik'
import { PaymentForm } from './PaymentForm'
import { Order, OrderItem, Price } from './paymentTypes'
import { PaymentSchema, initialValues } from './formData'
import { PaymentSummary } from './PaymentSummary'

export const PaymentFinalization = () => {
  const { products } = useAppSelector((state) => state.cm)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleOrderConfirmation = async () => {
    if (orderInfo.paymentMethod === 'stripe' && products.length > 0) {
      try {
        console.log('ORDER', orderInfo)
        await axios.post('http://localhost:5000/createOrder', orderInfo)

        const response = await axios.post('http://localhost:4242/checkout', {
          items: products,
          customerEmail: orderInfo.email,
        })
        console.log(response.data.url)
        window.location.href = response.data.url
        dispatch(cartActions.removeAll())
      } catch (error) {
        console.error('Error sending order:', error)
      }
    } else if (orderInfo.paymentMethod === 'cash' && products.length > 0) {
      try {
        await axios.post('http://localhost:5000/createOrder', orderInfo)
        dispatch(cartActions.removeAll())
        navigate('/success')
      } catch (error) {
        console.error('Error sending order:', error)
      }
    }
  }

  const formik = useFormik({
    initialValues,
    validationSchema: PaymentSchema,
    onSubmit: handleOrderConfirmation,
    isInitialValid: false,
  })

  const [totalPrice, setTotalPrice] = useState<Price>({
    total: 0,
    totalWithoutVAT: 0,
    shippingCost: 0,
    vatIncluded: undefined,
    grandTotal: undefined,
  })

  const [orderInfo, setOrderInfo] = useState<Order>({
    name: formik.values.name,
    phoneNumber: formik.values.phoneNumber,
    email: formik.values.email,
    address: formik.values.address,
    zipCode: formik.values.zipCode,
    country: formik.values.country,
    city: formik.values.city,
    state: formik.values.state,
    paymentMethod: formik.values.paymentMethod,
    total: totalPrice.total,
    totalWithoutVAT: totalPrice.totalWithoutVAT,
    shipping: totalPrice.shippingCost,
    vat: totalPrice.vatIncluded,
    grandTotal: totalPrice.grandTotal,
    items: products as OrderItem[],
  })

  useEffect(() => {
    console.log('SETORDER')
    setOrderInfo((prevOrderInfo) => ({
      ...prevOrderInfo,
      name: formik.values.name,
      phoneNumber: formik.values.phoneNumber,
      email: formik.values.email,
      address: formik.values.address,
      zipCode: formik.values.zipCode,
      country: formik.values.country,
      city: formik.values.city,
      state: formik.values.state,
      paymentMethod: formik.values.paymentMethod,
      total: totalPrice.total,
      totalWithoutVAT: totalPrice.totalWithoutVAT,
      shipping: totalPrice.shippingCost,
      vat: totalPrice.vatIncluded,
      grandTotal: totalPrice.grandTotal,
    }))
  }, [formik.values, products, totalPrice.vatIncluded])

  useEffect(() => {
    const sum = products.reduce<number>(
      (acc: number, product: ProductState) => {
        acc += product.price * product.quantity
        return acc
      },
      0
    )
    console.log(sum)
    const calculatedShippingCost = 50
    const totalWithoutVAT = sum + calculatedShippingCost

    setTotalPrice({
      total: sum,
      totalWithoutVAT: totalWithoutVAT,
      shippingCost: calculatedShippingCost,
    })
  }, [products])

  const validate = () => {
    if (
      orderInfo.address.length &&
      orderInfo.city.length &&
      orderInfo.country.length
    ) {
      return true
    } else {
      return false
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:4242/check-vat', {
          items: [{ amount: totalPrice.totalWithoutVAT, reference: 'L1' }],
          address: {
            line1: orderInfo.address,
            city: orderInfo.city,
            state: orderInfo.state,
            postal_code: orderInfo.zipCode,
            country: orderInfo.country,
          },
        })

        const { taxAmount } = response.data
        console.log('TAX', taxAmount)
        setTotalPrice((prevTotalPrice) => ({
          ...prevTotalPrice,
          vatIncluded: taxAmount,
          grandTotal: totalPrice.totalWithoutVAT + taxAmount,
        }))
        console.log(totalPrice)
      } catch (error) {
        console.error('Błąd podczas pobierania danych z serwera:', error)
        setTotalPrice((prevTotalPrice) => ({
          ...prevTotalPrice,
          vatIncluded: undefined,
          grandTotal: undefined,
        }))
      }
    }

    if (validate()) {
      fetchData()
    }
  }, [orderInfo])

  return (
    <div className="flex flex-col w-full justify-center bg-[#F1F1F1]">
      <Navigation />
      <form onSubmit={formik.handleSubmit}>
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
            <PaymentForm formik={formik} />
            <PaymentSummary
              products={products}
              formik={formik}
              totalPrice={totalPrice}
            />
          </div>
        </div>
      </form>
      <Footer />
    </div>
  )
}
