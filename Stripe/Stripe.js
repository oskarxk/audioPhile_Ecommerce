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

app.get('/', (req, res) => {
  res.send(JSON.stringify({ siema: 'byku' }))
})

app.post('/checkout', async (req, res) => {
  const items = req.body.items
  const customer_email = req.body.customerEmail
  console.log(items)
  let lineItems = []
  items.forEach((item) => {
    lineItems.push({
      price: item.priceId,
      quantity: item.quantity,
    })
  })

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: 'payment',
    success_url: `${SUCCESS}`,
    cancel_url: `${CANCELED}`,
    customer_email: customer_email,
  })

  res.send(
    JSON.stringify({
      url: session.url,
    })
  )
})

app.listen(4242, () => console.log('Running on port 4242'))
