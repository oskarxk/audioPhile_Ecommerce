const express = require('express');
const app = express();
const http = require('http');
const knex = require('knex')({
	client: 'sqlite3',
	connection: {
		filename: './db.sql', //specify the path to your sqlite database file
	},
	useNullAsDefault: true,
});
const socketIO = require('socket.io');
const server = http.Server(app);
const io = socketIO(server, {
	cors: {
		origin: 'http://localhost:3000',
	},
});
const cors = require('cors');

app.use(cors());

const messages = [];

io.on('connection', (socket) => {
	console.log('SOMEBODY HAS CONENCTED');

	socket.on('join', (data) => {
		console.log(`${data} it is a user data`);
	});

	socket.on('message', (message) => {
		console.log(`Server has received message: ${message}`);
		messages.push(message);
		io.emit('message', messages);
	});

	socket.on('disconnect', () => {
		console.log('Somebody has disconnected');
	});
});

// create the message table if doesnt exits

// knex.schema
// 	.createTableIfNotExists('messages', (table) => {
// 		table.increments('id');
// 		table.string('content');
// 	})
// 	.then(() => {
// 		console.log('Table created succesfully');
// 	})
// 	.catch((error) => {
// 		console.log('Error creating table:', error);
// 	});

// app.get(`/api/messages`, (req, res) => {
// 	knex('messages')
// 		.select()
// 		.then((messages) => {
// 			res.json(messages);
// 		})
// 		.catch((error) => {
// 			console.log('Error retrieving messages:', error);
// 			res.sendStatus(500);
// 		});
// });

// app.get('/', (req, res) => {
// 	res.send("I'm working");
// });

//START THE SERVER
const port = 4000;
server.listen(port, () => {
	console.log(`Chat message server is running on port ${port}`);
});
