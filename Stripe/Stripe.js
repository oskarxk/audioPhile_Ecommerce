const stripe = require('stripe')(
  'sk_test_51MYA9SK5BUEp3oMFxyu8xnDXLWuz9MG2m0N2aRvbpAWc53H5UIYTJlWBrgrZK49eVu7HbvQqyEmMi2qYcvOyvHf600CfZdoM1u'
)
const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.static('public'))
app.use(cors())
app.use(express.json())

const SUCCESS = 'http://localhost:3000/success'
const CANCELED = 'http://localhost:3000/canceled'

app.post('/check-vat', async (req, res) => {
  const items = req.body.items
  const address = req.body.address
  let lineItems = []
  items.forEach((item) => {
    lineItems.push({
      amount: item.amount,
      reference: item.reference,
    })
  })
  try {
    const calculation = await stripe.tax.calculations.create({
      currency: 'usd',
      line_items: lineItems,
      customer_details: {
        address: {
          line1: address.line1,
          city: address.city,
          state: address.state,
          postal_code: address.postal_code,
          country: address.country,
        },
        address_source: 'billing',
      },
      expand: ['line_items.data.tax_breakdown'],
    })
    res.status(200).json({ taxAmount: calculation.tax_amount_exclusive })
  } catch (error) {
    console.error('Wystąpił błąd:', error)
    res.status(500).json({ error: 'Wystąpił błąd podczas obliczania podatku' })
  }
})

app.post('/checkout', async (req, res) => {
  const items = req.body.items
  const customer_email = req.body.customerEmail
  // const taxRates = req.body.tax_rates
  console.log(items)
  let lineItems = []
  items.forEach((item) => {
    lineItems.push({
      price: item.priceId,
      quantity: item.quantity,
      // tax_rates: [taxRates],
    })
  })

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: 'payment',
    success_url: `${SUCCESS}`,
    cancel_url: `${CANCELED}`,
    customer_email: customer_email,
    shipping_options: [
      {
        shipping_rate_data: {
          type: 'fixed_amount',
          fixed_amount: {
            amount: 5000,
            currency: 'usd',
          },
          display_name: 'Next day ship',
          delivery_estimate: {
            minimum: {
              unit: 'business_day',
              value: 1,
            },
            maximum: {
              unit: 'business_day',
              value: 5,
            },
          },
        },
      },
    ],
    automatic_tax: {
      enabled: true,
    },
  })

  res.send(
    JSON.stringify({
      url: session.url,
    })
  )
})

app.listen(4242, () => console.log('Running on port 4242'))
