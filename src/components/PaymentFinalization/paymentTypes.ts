import { Product } from 'types/product'

export type Order = {
  name: string
  email: string
  phoneNumber: string
  address: string
  zipCode: string
  city: string
  state: string
  country: string
  paymentMethod: string
  total: number | undefined
  totalWithoutVAT: number | undefined
  shipping: number | undefined
  vat: number | undefined
  grandTotal: number | undefined
  items: OrderItem[]
}

export type OrderItem = Product & {
  quantity: number
  priceId: string
}

export type Price = {
  total?: number
  totalWithoutVAT?: number
  shippingCost?: number
  vatIncluded?: number
  grandTotal?: number
}

export type FormikType = {
  name: string
  phoneNumber: string
  email: string
  address: string
  zipCode: string
  country: string
  city: string
  state: string
  paymentMethod: string
}
