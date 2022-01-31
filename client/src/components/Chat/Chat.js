import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';

import { Form, Input } from 'reactstrap';

import {
	Button,
	ListGroup,
	ListGroupItem,
	ListGroupItemHeading,
	ListGroupItemText
} from 'reactstrap';

const socket = io.connect('/');

const Chat = props => {
	const [name, setName] = useState('');
	const [room, setRoom] = useState('');
	const [messages, setMessages] = useState([]);
	const [message, setMessage] = useState('');

	const messagesEndRef = useRef(null);

	useEffect(() => {
		const { name, room } = props;
		let isMounted = true;

		if (isMounted) {
			setRoom(room);
			setName(name);
			socket.connect();
			socket.emit('join', { name, room }, error => {
				if (error) alert(error);
			});
			// socket.on('connect', () => {
			// 	console.log(socket.id);
			// });

			socket.on('message', message => {
				setMessages(prevState => [...prevState, message]);
			});
			// socket.on('disconnect', () => {
			// 	socket.connect();
			// });
		}

		return () => {
			isMounted = false;
			socket.disconnect();
		};
	}, []);

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
	};

	useEffect(() => {
		scrollToBottom();
	}, [messages]);

	const handleSubmit = e => {
		e.preventDefault();
		if (message) {
			socket.emit('sendMessage', { message });
			setMessage('');
		} else alert('empty input');
	};

	const changeInputHandler = e => {
		setMessage(e.target.value);
	};

	return (
		<div className="chat">
			<ListGroup className="chatContainer">
				{messages.map((val, i) => {
					return (
						<ListGroupItem
							className={`message ${val.user == name ? 'myMessage' : 'oppMessage'}`}
							data={val.user}
							key={i}>
							<ListGroupItemHeading>{val.user}</ListGroupItemHeading>
							<ListGroupItemText>{val.text}</ListGroupItemText>
							<div ref={messagesEndRef} />
						</ListGroupItem>
					);
				})}
			</ListGroup>

			<Form>
				<Input
					autoFocus={true}
					value={message}
					name="message"
					onChange={changeInputHandler}
					cols="80"
					placeholder="Please enter your message"
					rows="4"
					type="textarea"
				/>

				<Button
					outline
					className="btn-fill"
					color="primary"
					type="button"
					onClick={handleSubmit}>
					Send Message
				</Button>
			</Form>
		</div>
	);
};

export default Chat;
