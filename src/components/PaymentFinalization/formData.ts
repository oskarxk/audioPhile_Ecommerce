import * as Yup from 'yup'

export const PaymentSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Please provide a proper name'),
  phoneNumber: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Please provide a proper phone number'),
  email: Yup.string()
    .email()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Please provide a proper e-mail'),
  address: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Please provide a proper adress'),
  zipCode: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Please provide a proper zip code'),
  country: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Please provide a proper country'),
  city: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Please provide a proper city'),
  state: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Please provide a proper state'),
  paymentMethod: Yup.string().oneOf(['cash', 'stripe']),
})

export const initialValues = {
  name: '',
  phoneNumber: '',
  email: '',
  address: '',
  zipCode: '',
  country: '',
  city: '',
  state: '',
  paymentMethod: 'stripe',
}
