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

const chats = [];
const admin = {
	adminUserName: 'oskar',
	adminPassword: '123',
};

let adminUniqueId = '';

io.on('connection', (socket) => {
	console.log(`User connected: ${socket.id}`);

	socket.on('get_all_chats', (token) => {
		if (token === adminUniqueId) {
			const activeChats = chats.filter((chat) => !chat.archived);
			socket.emit('all_chats', activeChats);
		}
	});

	socket.on('join_room', (roomName, productName, productPhoto) => {
		console.log(`${roomName} it is a user data`);
		const chat = chats.find((el) => el.roomName === roomName);
		if (!chat) {
			chats.push({
				roomName,
				productName,
				productPhoto,
				userId: socket.id,
				archived: false,
				messages: [],
			});
			socket.broadcast.emit('all_chats', Array.from(chats));
		}

		socket.join(roomName);
		console.log(`User with ID: ${socket.id} joined room ${roomName}`);
	});

	socket.on('send_message', (data) => {
		const chat = chats.find((chat) => chat.roomName === data.room);
		if (chat) {
			chat.messages.push({
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

	socket.on('logout', (callback) => {
		adminUniqueId = null;
		callback(true);
	});

	socket.on('leave_room', (roomName) => {
		console.log(`${roomName} to dane użytkownika`);
		console.log(`User with ID: ${socket.id} leaved room ${roomName}`);
		socket.leave(roomName);
	});

	socket.on('delete_chat', (roomName, token) => {
		if (token === adminUniqueId) {
			const chat = chats.find((chat) => chat.roomName === roomName);
			chat.archived = true;
			const activeChats = chats.filter((chat) => !chat.archived);
			socket.emit('all_chats', activeChats);
			const archivedChats = chats.filter((chat) => chat.archived);
			socket.emit('archived_chats', archivedChats);
		}
	});

	socket.on('get_archived_chats', (token) => {
		if (token === adminUniqueId) {
			const archivedChats = chats.filter((chat) => chat.archived);
			socket.emit('archived_chats', archivedChats);
		}
	});

	socket.on('get_historical_messages', (roomName, callback) => {
		const selectedChat = chats.find((chat) => chat.roomName === roomName);
		if (selectedChat) {
			const messages = selectedChat.messages;
			callback(messages);
		} else {
			callback([]);
		}
	});
});

//START THE SERVER
const port = 4000;
server.listen(port, () => {
	console.log(`Chat message server is running on port ${port}`);
});
