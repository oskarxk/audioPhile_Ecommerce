const express = require('express');
const app = express();
const knex = require('knex')({
	client: 'sqlite3',
	connection: {
		filename: '', //specify the path to your sqlite database file
	},
	useNullAsDefault: true,
});

// create the message table if doesnt exits

knex.schema
	.createTableIfNotExists('messages', (table) => {
		table.increments('id');
		table.string('content');
	})
	.then(() => {
		console.log('Table created succesfully');
	})
	.catch((error) => {
		console.log('Error creating table:', error);
	});

app.get(`api/messages`, (req, res) => {
	knex('messages')
		.select()
		.then((messages) => {
			res.json(messages);
		})
		.catch((error) => {
			console.log('Error retrieving messages:', error);
			res.sendStatus(500);
		});
});

//START THE SERVER
const port = 3000;
app.listen(port, () => {
	console.log(`Chat message server is running on port ${port}`);
});
