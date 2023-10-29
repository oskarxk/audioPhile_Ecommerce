import { FormikProps } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom'
import { ProductState } from 'types/product'
import { FormikType, Price } from './paymentTypes'

export const PaymentSummary: React.FC<{
  formik: FormikProps<FormikType>
  products: ProductState[]
  totalPrice: Price
}> = ({ formik, products, totalPrice }) => {
  return (
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
          <p className="font-bold tracking-wide">$ {totalPrice.shippingCost}</p>
        </div>
      </div>
      <div className="flex my-2">
        <div className="w-1/2 text-left">
          <p className="text-[#808080] text-sm">VAT (INCLUDED)</p>
        </div>
        <div className="w-1/2 text-right">
          {totalPrice.vatIncluded !== undefined ? (
            <p className="font-bold tracking-wide">
              ${totalPrice.vatIncluded?.toFixed(2)}
            </p>
          ) : (
            <p className="font-bold tracking-wide">Complete form</p>
          )}
        </div>
      </div>
      <div className="flex my-2">
        <div className="w-1/2 text-left">
          <p className="text-[#808080] text-sm">GRAND TOTAL</p>
        </div>
        <div className="w-1/2 text-right">
          {totalPrice.grandTotal !== undefined ? (
            <p className="font-bold tracking-wide">
              ${totalPrice.grandTotal?.toFixed(2)}
            </p>
          ) : (
            <p className="font-bold tracking-wide">Complete form</p>
          )}
        </div>
      </div>
      <div className="w-full">
        <Link to={`/payment`}>
          <button
            className={`bg-[#D87D4A] hover:bg-[#fbaf85] text-white w-full py-2 font-bold text-sm ${
              formik.isValid && products.length > 0
                ? ''
                : 'cursor-not-allowed opacity-50'
            }`}
            onClick={() => formik.submitForm()}
          >
            CONTINUE & PAY
          </button>
        </Link>
      </div>
    </div>
  )
}
