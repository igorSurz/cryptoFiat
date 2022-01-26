import React from 'react';
import { useState } from 'react';

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

function Registration() {
	const [avatarIdx, setAvatarIdx] = useState(1);
	const [form, setForm] = useState({
		username: '',
		fName: '',
		lName: '',
		email: '',
		city: '',
		country: '',
		btcWallet: '',
		additionalInfo: ''
	});

	const avatarArrows = e => {
		if (e.target.id === 'arrowRight') {
			avatarIdx === 6 ? setAvatarIdx(1) : setAvatarIdx(prevState => prevState + 1);
		} else {
			avatarIdx === 1 ? setAvatarIdx(6) : setAvatarIdx(prevState => prevState - 1);
		}
	};

	const handleInputChange = e => {
		const target = e.target;
		const value = target.value;
		const name = target.name;

		setForm({ ...form, [name]: value });
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
									//   onSubmit={handleSubmit}
								>
									<Row>
										<Col className="px-md-1" md="6">
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
										<Col className="px-md-1" md="6">
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
										{/* <Col className="pl-md-1" md="4">
											<FormGroup>
												<label>Postal Code (optional)</label>
												<Input placeholder="ZIP Code" type="number" />
											</FormGroup>
										</Col> */}
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
								</Form>
							</CardBody>
							<CardFooter>
								<Button className="btn-fill" color="primary" type="submit">
									Save
								</Button>
							</CardFooter>
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
											src={
												require(`../assets/img/avatars/avatar${avatarIdx}.png`)
													.default
											}
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

export default Registration;
