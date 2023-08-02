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
const archivedChats = [];
const admin = {
	adminUserName: 'oskar',
	adminPassword: '123',
};

let adminUniqueId = '';

function archive_chat(roomName) {
	const index = rooms.findIndex((room) => room.roomName === roomName);
	if (index !== -1) {
		const archivedChat = rooms.splice(index, 1)[0];
		archivedChats.push(archivedChat);
		io.emit('all_chats', Array.from(rooms));
		io.emit('archived_chats', archivedChats);
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
		const selectedChat = archivedChats.find((chat) => chat.roomName === data.room);
		if (selectedChat) {
		  selectedChat.messages.push({
			room: data.room,
			author: data.author,
			message: data.message,
			time: data.time,
		  });
		}
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
		socket.leave(roomName);
	});

	socket.on('delete_chat', (roomName, token) => {
		if (token === adminUniqueId) {
			archive_chat(roomName);
		}
	});

	socket.on('get_archived_chats', (token) => {
		if (token === adminUniqueId) {
			socket.emit('archived_chats', archivedChats);
		}
	});

	socket.on('get_historical_messages', (roomName) => {
		const selectedChat = archivedChats.find((chat) => chat.roomName === roomName);
		if (selectedChat) {
		  const messages = selectedChat.messages;
		  socket.emit('historical_messages', messages);
		} else {
		  socket.emit('historical_messages', []);
		}
	  });
});

//START THE SERVER
const port = 4000;
server.listen(port, () => {
	console.log(`Chat message server is running on port ${port}`);
});
