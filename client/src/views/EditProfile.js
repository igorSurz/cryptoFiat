import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

import { AuthContext } from '../contexts/auth.context';

import { ReactComponent as ArrLeft } from '../assets/img/aLeft.svg';
import { ReactComponent as ArrRight } from '../assets/img/aRight.svg';

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
	Col
} from 'reactstrap';

function EditProfile() {
	const { userId } = useContext(AuthContext);

	/////
	const auth = useContext(AuthContext);
	console.log('context', auth);

	const [isLoading, setIsLoading] = useState(false);
	/////

	const [form, setForm] = useState({
		username: '',
		fName: '',
		lName: '',
		email: '',
		city: '',
		country: '',
		btcWallet: '',
		additionalInfo: '',
		avatarIdx: 1
	});

	const avatarArrows = e => {
		if (e.target.id === 'arrowRight') {
			form.avatarIdx === 6
				? setForm({ ...form, avatarIdx: 1 })
				: setForm(prevState => ({ ...prevState, avatarIdx: +prevState.avatarIdx + 1 }));
		} else {
			form.avatarIdx === 1
				? setForm({ ...form, avatarIdx: 6 })
				: setForm(prevState => ({ ...prevState, avatarIdx: +prevState.avatarIdx - 1 }));
		}
	};

	useEffect(() => {
		try {
			axios.post(`/api/retrieveuser`, { userId: userId }).then(async res => {
				if (res.data) setForm(res.data);
			});
		} catch (e) {}
	}, [userId]);

	const handleInputChange = e => {
		const target = e.target;
		const name = target.name;
		const value = target.value;
		name === 'username' && value.toLowerCase();

		setForm({ ...form, [name]: value });
	};

	const handleSubmit = e => {
		e.preventDefault();

		try {
			for (const key in form) {
				if (form[key] === '') {
					delete form[key];
				}
			}
			axios.post(`/api/update`, { ...form, userId }).then(async res => {
				auth.update(form);
				//POP UP SUCCESS MESSAGE IN BOTTOM CORNER
			});
		} catch (e) {}
	};

	return (
		<>
			<div className="content">
				<Row>
					<Col md="8">
						<Card>
							<CardHeader>
								<h5 className="title">Edit Profile</h5>
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
												<label>Username (visible to other users)</label>

												<Input
													value={form.username}
													name="username"
													onChange={handleInputChange}
													placeholder="Username"
													type="text"
												/>
											</FormGroup>
										</Col>
										<Col className="pl-md-1" md="6">
											<FormGroup>
												<label htmlFor="exampleInputEmail1">
													Email address
												</label>
												<Input
													value={form.email}
													name="email"
													onChange={handleInputChange}
													placeholder="Enter your email"
													type="email"
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
									{/* <Row>
										<Col md="12">
											<FormGroup>
												<label>Address (optional)</label>
												<Input
													placeholder="Belkin str 132/25"
													type="text"
												/>
											</FormGroup>
										</Col>
									</Row> */}
									<Row>
										<Col className="pr-md-1" md="6">
											<FormGroup>
												<label>City (optional)</label>
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
												<label>Country (optional)</label>
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
												<label>Your BTC wallet address</label>
												<Input
													value={form.btcWallet}
													name="btcWallet"
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
												<label>Additional information (optional)</label>
												<Input
													value={form.additionalInfo}
													name="additionalInfo"
													onChange={handleInputChange}
													cols="80"
													placeholder="Here can be your profile description or transfer conditions"
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
									<div className="block block-two" />
									<div className="block block-three" />
									<div className="block block-four" />
									<div className="avatar-box">
										<div id="arrowLeft" onClick={avatarArrows}>
											<ArrLeft />
										</div>

										<img
											alt="..."
											className="avatar"
											src={require(`../assets/img/avatars/avatar${form.avatarIdx}.png`)}
										/>
										<div id="arrowRight" onClick={avatarArrows}>
											<ArrRight />
										</div>
									</div>

									<h5 className="title">{form.username}</h5>

									<p className="description">
										{form.fName} {form.lName}
									</p>
								</div>
								<div className="card-description">{form.additionalInfo}</div>
							</CardBody>
							<CardFooter>
								{/* here can be some additional shit, need to think what can be useful here */}
							</CardFooter>
						</Card>
					</Col>
				</Row>
			</div>
		</>
	);
}

export default EditProfile;
