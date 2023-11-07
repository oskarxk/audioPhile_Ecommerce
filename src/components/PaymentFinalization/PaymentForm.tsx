import React, { useEffect } from 'react'
import { FormikProps } from 'formik'
import { Input } from './Input'
import { FormikType } from './paymentTypes'

export const PaymentForm: React.FC<{ formik: FormikProps<FormikType> }> = ({
  formik,
}) => {
  useEffect(() => {
    // console.log(formik.values)
  }, [formik])

  return (
    <div className="w-3/4 lg:w-8/12 bg-white rounded-md px-8 py-8">
      <div className="w-full">
        <p className="text-black text-left text-3xl font-bold mb-8">CHECKOUT</p>
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
              <Input
                name={'name'}
                error={!!(formik.errors.name && formik.touched.name)}
                errorText={formik.errors.name ? formik.errors.name : ''}
                value={formik.values.name}
                label={'Name'}
                onChange={formik.handleChange}
              />
            </div>
            <div className="flex flex-col">
              <Input
                name={'phoneNumber'}
                error={
                  !!(formik.errors.phoneNumber && formik.touched.phoneNumber)
                }
                errorText={
                  formik.errors.phoneNumber ? formik.errors.phoneNumber : ''
                }
                value={formik.values.phoneNumber}
                label={'Phone Number'}
                onChange={formik.handleChange}
              />
            </div>
          </div>
          <div className="w-full lg:w-5/12	">
            <div className="flex flex-col">
              <Input
                name={'email'}
                error={!!(formik.errors.email && formik.touched.email)}
                errorText={formik.errors.email ? formik.errors.email : ''}
                value={formik.values.email}
                label={'Email'}
                onChange={formik.handleChange}
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
              <Input
                name={'address'}
                error={!!(formik.errors.address && formik.touched.address)}
                errorText={formik.errors.address ? formik.errors.address : ''}
                value={formik.values.address}
                label={'Address'}
                onChange={formik.handleChange}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row w-full justify-between">
          <div className="w-full lg:w-5/12">
            <div className="flex flex-col">
              <Input
                name={'zipCode'}
                error={!!(formik.errors.zipCode && formik.touched.zipCode)}
                errorText={formik.errors.zipCode ? formik.errors.zipCode : ''}
                value={formik.values.zipCode}
                label={'Zip Code'}
                onChange={formik.handleChange}
              />
            </div>
            <div className="flex flex-col">
              {/* <Input-
                name={'country'}
                error={!!(formik.errors.country && formik.touched.country)}
                errorText={formik.errors.country ? formik.errors.country : ''}
                value={formik.values.country}
                label={'Country'}
                onChange={formik.handleChange}
              /> */}
              <label className="text-left font-semibold py-2" htmlFor="country">
                Country
              </label>
              <select
                value={formik.values.country}
                onChange={(e) =>
                  formik.setFieldValue('country', e.target.value)
                }
                onBlur={formik.handleBlur}
                className={`py-4 border-2 rounded-md outline-none pl-4 ${
                  !!formik.errors.country && formik.touched.country
                    ? ' border-red-600'
                    : 'border-[#F1F1F1]'
                }`}
              >
                <option value="" label="Choose Country">
                  Choose Country
                </option>
                <option value="PL" label="Poland">
                  POLAND
                </option>
                <option value="US" label="USA">
                  USA
                </option>
                <option value="GB" label="Great Britain">
                  Great Britain
                </option>
              </select>
            </div>
          </div>
          <div className="w-full lg:w-5/12">
            <div className="flex flex-col">
              <Input
                name={'city'}
                error={!!(formik.errors.city && formik.touched.city)}
                errorText={formik.errors.city ? formik.errors.city : ''}
                value={formik.values.city}
                label={'City'}
                onChange={formik.handleChange}
              />
            </div>
            <div className="flex flex-col">
              <Input
                name={'state'}
                error={!!(formik.errors.state && formik.touched.state)}
                errorText={formik.errors.state ? formik.errors.state : ''}
                value={formik.values.state}
                label={'State'}
                onChange={formik.handleChange}
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
              <p className="text-left font-semibold py-2">Payment Method</p>
            </div>
          </div>
          <div className="w-full lg:w-5/12">
            <div className="flex flex-col">
              <div
                className={`flex items-center py-6 my-2 border-2 ${
                  formik.values.paymentMethod === 'stripe'
                    ? 'border-[#D87D4A]'
                    : 'border-[#F1F1F1]'
                } rounded-md outline-none`}
                onClick={() => {
                  formik.setFieldValue('paymentMethod', 'stripe')
                }}
              >
                <div className="flex justify-center items-center h-6 w-6 ml-8 rounded-full border-2 border-[#F1F1F1]">
                  {formik.values.paymentMethod === 'stripe' && (
                    <div className=" h-4 w-4 bg-[#D87D4A] rounded-full"></div>
                  )}
                </div>
                <p className="font-bold px-8">Stripe</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div
                className={`flex items-center py-6 my-2 border-2 ${
                  formik.values.paymentMethod === 'cash'
                    ? 'border-[#D87D4A]'
                    : 'border-[#F1F1F1]'
                } rounded-md outline-none`}
                onClick={() => {
                  formik.setFieldValue('paymentMethod', 'cash')
                }}
              >
                <div className="flex justify-center items-center h-6 w-6 ml-8 rounded-full border-2 border-[#F1F1F1]">
                  {formik.values.paymentMethod === 'cash' && (
                    <div className=" h-4 w-4 bg-[#D87D4A] rounded-full"></div>
                  )}
                </div>
                <p className="font-bold px-8">Cash on delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
