import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io.connect('/');

const Chat = props => {
	const [name, setName] = useState('');
	const [room, setRoom] = useState('');
	const [messages, setMessages] = useState([]);
	const [message, setMessage] = useState('');

	console.log(messages);

	useEffect(() => {
		const { name, room } = props;
		let isMounted = true;

		if (isMounted) {
			setRoom(room);
			setName(name);
			socket.emit('join', { name, room }, error => {
				if (error) alert(error);
			});
		}

		return () => {
			isMounted = false;
		};
	}, []);

	useEffect(() => {
		//isMounted uses for preventing state update before component is mounted
		let isMounted = true;
		if (isMounted) {
			socket.on('message', message => {
				setMessages(prevState => [...prevState, message]);
			});
		}
		return () => {
			isMounted = false;
			socket.disconnect();
		};
	}, []);

	const handleSubmit = e => {
		e.preventDefault();
		if (message) {
			socket.emit('sendMessage', { message });
			setMessage('');
		} else alert('empty input');
	};

	return (
		<div>
			{messages.map((val, i) => {
				return (
					<div key={i}>
						{val.text}
						<br />
						{val.user}
					</div>
				);
			})}

			<form action="" onSubmit={handleSubmit}>
				<input type="text" value={message} onChange={e => setMessage(e.target.value)} />
				<input type="submit" />
			</form>
		</div>
	);
};

export default Chat;
