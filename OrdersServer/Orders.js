import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()
const port = 5000

app.use(bodyParser.json())
app.use(cors())

const orders = []

app.post('/createOrder', (req, res) => {
  const newOrder = {
    orderNumber: `#${Math.floor(100000 + Math.random() * 900000)}`,
    orderDate: `${new Date().toLocaleDateString().slice(0, 10)}`,
    orderTime: `${new Date().toLocaleTimeString()}`,
    name: req.body.name,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    address: req.body.address,
    zipCode: req.body.zipCode,
    city: req.body.city,
    state: req.body.state,
    country: req.body.country,
    paymentMethod: req.body.paymentMethod,
    total: req.body.total,
    totalWithoutVAT: req.body.totalWithoutVAT,
    shipping: req.body.shipping,
    vat: req.body.vat,
    grandTotal: req.body.grandTotal,
    items: req.body.items,
  }
  orders.push(newOrder)
  console.log(orders)
  res.status(201).json({ message: 'Order created successfully!' })
})

app.get('/orders', (req, res) => {
  res.status(200).json(orders)
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
