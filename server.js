const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const socketIO = require('socket.io');

//add user helper for socket.io
const { addUser, removeUser } = require('./user');

//import routes
const authRoutes = require('./src/routes/auth');
const chartRoute = require('./src/routes/chart');

require('dotenv').config();

//app
const app = express();

// db
mongoose
	.connect(process.env.MONGODB_URI, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
		useFindAndModify: false
	})
	.then(() => console.log('DB Connected'));

//middlewares

// app.use(bodyParser.json())  //deprecated
app.use(
	express.json({
		extended: true
	})
);

app.use(cors());

//routes middleware
app.use('/api', authRoutes);
app.use('/api', chartRoute);

app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

//node server set up
const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
	console.log(`Server is running on ${port}`);
});

//static client folder - builded react app
app.use(express.static(path.join(__dirname, 'client', 'build')));

//all requests from browser redirects to builded rect app in client folder
app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

//Socket.io setup
const io = socketIO(server);

//socket.io events
io.on('connection', socket => {
	socket.on('join', ({ name, room }, callBack) => {
		const { user, error } = addUser({ id: socket.id, name, room });
		if (error) return callBack(error);

		console.log('socket IO connected');
		socket.join(user.room);
		socket.emit('message', {
			user: 'System Message',
			text: `Welcome to room ${user.room}`
		});

		socket.broadcast
			.to(user.room)
			.emit('message', { user: 'System Message', text: `${user.name} has joined!` });
		callBack(null);

		socket.on('sendMessage', ({ message }) => {
			if (user == undefined) return;
			io.to(user.room).emit('message', {
				user: user.name,
				text: message
			});
		});
	});
	socket.on('disconnect', () => {
		const user = removeUser(socket.id);
		if (user) {
			console.log(user);
			io.to(user.room).emit('message', {
				user: 'System Message',
				text: `${user.name} just left the room`
			});
		}

		console.log('A disconnection has been made');
	});
});
