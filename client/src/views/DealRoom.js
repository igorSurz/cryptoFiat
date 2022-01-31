import React, { useContext, useEffect, useState } from 'react';

//context
import { AuthContext } from '../contexts/auth.context';

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, CardFooter, Row, Col, Button } from 'reactstrap';

import Chat from '../components/Chat/Chat';
import axios from 'axios';

function DealRoom() {
	const { username, isAuthenticated } = useContext(AuthContext);
	const [offer, setOffer] = useState({});

	// console.log(isAuthenticated);

	const [isSetUser, setIsSetUser] = useState(false);
	const [user, setUser] = useState({
		name: '',
		room: ''
	});

	useEffect(() => {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		const linkOfferId = urlParams.get('id');

		// if (urlParams.has('id') may be check in the future if there is offer ID
		try {
			axios.post(`/api/retrieveoffer`, { offerId: linkOfferId }).then(async res => {
				if (res.data) setOffer(res.data);
			});
		} catch (e) {
			console.log(e);
		}

		setUser({
			name: username,
			room: `of${offer._id}${offer.username}Us${offer.userId}`
		});

		// setUser(true)
	}, [offer]);

	const chatDataFormHandler = () => {
		setIsSetUser(true);
	};

	const chatDataForm = () => {
		return (
			<Button
				outline
				className="btn-fill"
				color="primary"
				type="submit"
				onClick={chatDataFormHandler}>
				Start Chat
			</Button>
		);
	};

	return (
		<>
			<div className="  content">
				<Row>
					<Col md="6">
						<Card className="dealroom card-user">
							<CardHeader>
								<CardTitle className="tac" tag="h4">
									Deal conditions with this {offer.status} {offer.username}
								</CardTitle>
							</CardHeader>
							<CardBody>
								<div className=" author m0 ">
									<div className="block block-one" />
									<div className="block block-two" />
									<div className="block block-three" />
									<div className="block block-four" />

									<p className="title">
										Name: {offer.fName} {offer.lName}
									</p>
									<p className="title">
										Location: {offer.country} {offer.city}
									</p>
								</div>
								<p className=" tac title">
									{offer.conditions ? 'Deal conditions:' : ''} {offer.conditions}
								</p>

								<CardFooter>
									<h5 className="title">
										{offer.currencyAmount
											? `Deal amount of ${offer.currency} is: $ `
											: ''}
										{offer.currencyAmount}
									</h5>
									<h5 className="title">
										{offer.userPrice ? ' Deal price is: $ ' : ''}
										{offer.userPrice}
									</h5>
									{/* <h5 className="title">
									Current BTC price is: $ {form.currentCurPrice}
								</h5> */}
								</CardFooter>
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
