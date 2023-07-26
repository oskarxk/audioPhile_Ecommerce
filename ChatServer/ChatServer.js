const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
	cors: {
		origin: 'http://localhost:3000',
		methods: ['GET', 'POST'],
	},
});

const rooms = [];
const admin = {
	adminUserName: 'oskar',
	adminPassword: '123',
};

let adminUniqueId = '';

function delete_chat(roomName) {
	const index = rooms.findIndex((room) => room.roomName === roomName);
	if (index !== -1) {
		rooms.splice(index, 1);
		io.emit('all_chats', Array.from(rooms)); // Powiadom wszystkich klientów o zaktualizowanej liście pokojów
	}
}

io.on('connection', (socket) => {
	console.log(`User connected: ${socket.id}`);

	socket.on('get_all_chats', (token) => {
		if (token === adminUniqueId) {
			const allChats = Array.from(rooms);
			socket.emit('all_chats', allChats);
		}
	});

	socket.on('join_room', (roomName, productName, productPhoto) => {
		console.log(`${roomName} it is a user data`);
		const isInArray = rooms.findIndex((el) => el.roomName === roomName) > -1;
		if (!isInArray) {
			rooms.push({ roomName, productName, productPhoto, userId: socket.id });
			socket.broadcast.emit('all_chats', Array.from(rooms));
		}

		socket.join(roomName);
		console.log(`User with ID: ${socket.id} joined room ${roomName}`);
	});

	socket.on('send_message', (data) => {
		socket.to(data.room).emit('receive_message', data);
	});

	socket.on('login', (userName, password, callback) => {
		if (userName === admin.adminUserName && password === admin.adminPassword) {
			adminUniqueId = new Date().getTime().toString(16);
			callback(adminUniqueId);
		} else {
			callback(false);
		}
	});

	socket.on('leave_room', (roomName) => {
		console.log(`${roomName} to dane użytkownika`);
		console.log(`User with ID: ${socket.id} leaved room ${roomName}`);
		socket.leave(roomName); // Rozłącz użytkownika z konkretnym pokojem
	});

	socket.on('delete_chat', (roomName, token) => {
		if (token === adminUniqueId) {
			delete_chat(roomName);
		}
	});
});

//START THE SERVER
const port = 4000;
server.listen(port, () => {
	console.log(`Chat message server is running on port ${port}`);
});
