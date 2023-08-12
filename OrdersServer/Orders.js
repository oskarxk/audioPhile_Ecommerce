import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

const orders = [];

app.post('/createOrder', (req, res) => {
	const newOrder = {
		orderNumber: `#${new Date().toISOString().slice(0, 10).replace(/-/g, '')}`,
		name: req.body.name,
		email: req.body.email,
		phoneNumber: req.body.phoneNumber,
		address: req.body.address,
		zipCode: req.body.zipCode,
		city: req.body.city,
		country: req.body.country,
		paymentMethod: req.body.paymentMethod,
		emoneyNumber: req.body.emoneyNumber,
		emoneyPIN: req.body.emoneyPIN,
		total: req.body.emoneyPIN,
		shipping: req.body.shipping,
		vat: req.body.vat,
		grandTotal: req.body.grandTotal,
		items: req.body.items,
	};

	orders.push(newOrder);
	res.status(201).json({ message: 'Order created successfully!' });
	console.log(orders);
});

app.get('/orders', (req, res) => {
	res.status(200).json(orders);
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
