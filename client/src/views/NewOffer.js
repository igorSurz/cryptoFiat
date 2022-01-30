import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

import { AuthContext } from '../contexts/auth.context';

// reactstrap components
import {
	Button,
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	CardText,
	FormGroup,
	Form,
	Input,
	Row,
	Col,
	ButtonGroup,
	InputGroupText,
	InputGroup
} from 'reactstrap';

function NewOffer() {
	const auth = useContext(AuthContext);

	/////
	// const [isLoading, setIsLoading] = useState(false);
	/////

	const [form, setForm] = useState({
		userId: '',
		status: '',
		username: '',
		fName: '',
		lName: '',
		country: '',
		city: '',
		currency: 'BTC',
		currencyAmount: '',
		currentCurPrice: '',
		conditions: '',
		sellerWallet: '',
		userPrice: ''
	});

	useEffect(() => {
		try {
			axios.get(`/api/price`).then(async res => {
				if (res.data) {
					let curP = await res.data['Realtime Currency Exchange Rate'][
						'5. Exchange Rate'
					];
					let CnyToUSD = 0.16;
					let formattedCurPice = (curP * CnyToUSD).toFixed();

					setForm(prevState => ({ ...prevState, currentCurPrice: formattedCurPice }));
				}
			});
		} catch (e) {
			console.log(e);
		}

		if (auth.isAuthenticated) {
			setForm(prevState => ({
				...prevState,
				userId: auth.userId,
				username: auth.username,
				fName: auth.fName,
				lName: auth.lName,
				sellerWallet: auth.btcWallet,
				country: auth.country,
				city: auth.city,
				currency: 'BTC'
			}));
		}
	}, [auth, setForm]);

	const handleInputChange = e => {
		const target = e.target;
		const name = target.name;
		const value = target.value;

		setForm({ ...form, [name]: value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		try {
			axios.post(`/api/newoffer`, { ...form }).then(async res => {
				//POP UP SUCCESS MESSAGE IN BOTTOM CORNER
			});
		} catch (e) {
			console.log('error', e);
		}
	};

	const onStatus = e => {
		setForm({ ...form, status: e.target.id });
	};

	return (
		<>
			<div className="content">
				<Row>
					<Col md="8">
						<Card>
							<CardHeader>
								<h5 className="title">Create New Offer</h5>
								<div>
									<ButtonGroup>
										<Button
											id="Buyer"
											color={form.status === 'Buyer' ? 'info' : 'primary'}
											active={form.status === 'Buyer' ? true : false}
											onClick={onStatus}>
											I Buy
										</Button>
										<Button
											id="Seller"
											color={form.status === 'Seller' ? 'info' : 'primary'}
											active={form.status === 'Seller' ? true : false}
											onClick={onStatus}>
											I Sell
										</Button>
									</ButtonGroup>
								</div>
							</CardHeader>
							<CardBody>
								<Form
									id="registrationForm"
									action="/"
									method="POST"
									onSubmit={handleSubmit}>
									<Row>
										<Col className="pr-md-1" md="6">
											<FormGroup>
												<label>Currency Amount</label>
												<InputGroup>
													<InputGroupText>{form.currency}</InputGroupText>
													<Input
														step="any"
														value={form.currencyAmount}
														name="currencyAmount"
														onChange={handleInputChange}
														placeholder="Please enter amount"
														type="number"
													/>
												</InputGroup>
											</FormGroup>
										</Col>
										<Col className="pl-md-1" md="6">
											<FormGroup>
												<label>Sell Price</label>
												<Input
													value={form.userPrice}
													name="userPrice"
													onChange={handleInputChange}
													placeholder="Please enter the price"
													type="number"
												/>
											</FormGroup>
										</Col>
									</Row>
									<Row>
										<Col className="pr-md-1" md="6">
											<FormGroup>
												<label>First Name (optional)</label>
												<Input
													value={form.fName}
													name="fName"
													onChange={handleInputChange}
													placeholder="First Name"
													type="text"
												/>
											</FormGroup>
										</Col>
										<Col className="pl-md-1" md="6">
											<FormGroup>
												<label>Last Name (optional)</label>
												<Input
													value={form.lName}
													name="lName"
													onChange={handleInputChange}
													placeholder="Last Name"
													type="text"
												/>
											</FormGroup>
										</Col>
									</Row>
									<Row>
										<Col className="pr-md-1" md="6">
											<FormGroup>
												<label>City (if deal in cash)</label>
												<Input
													value={form.city}
													name="city"
													onChange={handleInputChange}
													placeholder="City"
													type="text"
												/>
											</FormGroup>
										</Col>
										<Col className="pl-md-1" md="6">
											<FormGroup>
												<label>Country (if deal in cash)</label>
												<Input
													value={form.country}
													name="country"
													onChange={handleInputChange}
													placeholder="Country"
													type="text"
												/>
											</FormGroup>
										</Col>
									</Row>
									<Row>
										<Col md="12">
											<FormGroup>
												<label>Your cryptocurrency wallet address</label>
												<Input
													value={form.sellerWallet}
													name="sellerWallet"
													onChange={handleInputChange}
													placeholder="mjAC5RiC2aqd16btSq2iaE8Ukz5znyTUK8"
													type="text"
												/>
											</FormGroup>
										</Col>
									</Row>
									<Row>
										<Col md="8">
											<FormGroup>
												<label>Deal conditions (optional)</label>
												<Input
													value={form.conditions}
													name="conditions"
													onChange={handleInputChange}
													cols="80"
													placeholder="Here must be conditions of your Deal"
													rows="4"
													type="textarea"
												/>
											</FormGroup>
										</Col>
									</Row>
									<Button className="btn-fill" color="primary" type="submit">
										Save
									</Button>
								</Form>
							</CardBody>
							<CardFooter></CardFooter>
						</Card>
					</Col>
					<Col md="4">
						<Card className="card-user">
							<CardBody>
								<CardText />
								<div className="author">
									<div className="block block-one" />
									{/* <div className="block block-two" /> */}
									{/* <div className="block block-three" /> */}
									<div className="block block-four" />
									<h5 className="title">Please double check your information</h5>
									<p className="title">
										{form.status ? 'You are:' : ''} {form.status}
									</p>
									<p className="title">Username: {form.username}</p>
									<p className="title">
										Name: {form.fName} {form.lName}
									</p>
									<p className="title">
										Location: {form.country} {form.city}
									</p>
								</div>
								<h5 className="title">
									{form.conditions ? 'Deal conditions:' : ''} {form.conditions}
								</h5>
							</CardBody>
							<CardFooter>
								<h5 className="title">
									{form.currencyAmount
										? `Your deal amount of ${form.currency} is: $ `
										: ''}
									{form.currencyAmount}
								</h5>
								<h5 className="title">
									{form.userPrice ? ' Your deal price is: $ ' : ''}
									{form.userPrice}
								</h5>
								<h5 className="title">
									Current BTC price is: $ {form.currentCurPrice}
								</h5>

								{/* here can be some additional shit, need to think what can be useful here */}
							</CardFooter>
						</Card>
					</Col>
				</Row>
			</div>
		</>
	);
}

export default NewOffer;
