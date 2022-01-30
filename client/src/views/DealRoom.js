import React, { useContext, useState } from 'react';

//context
import { AuthContext } from '../contexts/auth.context';

// reactstrap components
import {
	Card,
	CardHeader,
	CardBody,
	CardTitle,
	Table,
	Row,
	Col,
	Button,
	FormGroup,
	Form,
	Input
} from 'reactstrap';

import Chat from '../components/Chat/Chat';

function DealRoom() {
	const { username, isAuthenticated } = useContext(AuthContext);

	// console.log(isAuthenticated);

	const [isSetUser, setIsSetUser] = useState(true);
	const [user, setUser] = useState({ name: username, room: 456 });

	const chatDataFormHandler = () => {
		setIsSetUser(true);
	};

	const handleInputChange = e => {
		const target = e.target;
		const name = target.name;
		const value = target.value;
		if (!isAuthenticated) return;
		setUser({ name: username, [name]: value });
	};

	const handleKeyDown = e => {
		e.preventDefault();

		if (e.key === 'Enter') {
			chatDataFormHandler();
		}
	};

	const chatDataForm = () => {
		return (
			<>
				<Form>
					<Row>
						<Col className="pl-md-1" md="6">
							<FormGroup>
								<label htmlFor="exampleInputEmail1">Chat Room</label>
								<Input
									value={user.room}
									name="room"
									onKeyDown={handleKeyDown}
									onChange={handleInputChange}
									placeholder="Enter you room"
									type="text"
								/>
							</FormGroup>
						</Col>
					</Row>
				</Form>
				<Button
					className="btn-fill"
					color="primary"
					type="submit"
					onClick={chatDataFormHandler}>
					Save
				</Button>
			</>
		);
	};

	return (
		<>
			<div className="content">
				<Row>
					<Col md="6">
						<Card>
							<CardHeader>
								<CardTitle tag="h4">Deal Information</CardTitle>
								<p className="category">PLease double check the conditions</p>
							</CardHeader>
							<CardBody>
								<Table
									className="table-hover table-active"
									hover
									striped
									responsive>
									<thead>
										<tr>
											<th>Name</th>
											<th>Country</th>
											<th>City</th>
											<th className="text-center">Amount USD</th>
											<th className="text-center">Amount BTC</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												Dakota Rice
												<i className="tim-icons icon-shape-star" />
												<i className="tim-icons icon-shape-star" />
												<i className="tim-icons icon-shape-star" />
											</td>
											<td>Izrailovka</td>
											<td>Oud</td>
											<td className="text-center">$36,738</td>
											<td className="text-center">B 0,6679</td>
										</tr>
										{/* <tr>
											<td>Minerva Hooper</td>
											<td>Curaçao</td>
											<td>Sinaai-Waas</td>
											<td className="text-center">$23,789</td>
											<td className="text-center">B 0,6679</td>
										</tr> */}
									</tbody>
								</Table>
							</CardBody>
						</Card>
					</Col>
					<Col md="6">
						<Card>
							<CardHeader>
								<CardTitle tag="h4">Chat</CardTitle>
								<p className="category">
									Please close the deal in this chat with your friend
								</p>
							</CardHeader>
							<CardBody>
								{isSetUser ? (
									<Chat name={user.name} room={user.room} />
								) : (
									chatDataForm()
								)}
							</CardBody>
						</Card>
					</Col>
				</Row>
			</div>
		</>
	);
}

export default DealRoom;
