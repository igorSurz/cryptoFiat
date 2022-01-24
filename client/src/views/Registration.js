import React from 'react';
import { useState } from 'react';

import { ReactComponent as ArrLeft } from '../assets/img/aLeft.svg';
import { ReactComponent as ArrRight } from '../assets/img/aRight.svg';

// reactstrap components
import { Button, Card, CardHeader, CardBody, CardFooter, CardText, FormGroup, Form, Input, Row, Col } from 'reactstrap';

function Registration() {
	const [avatar, setAvatar] = useState('avatar1');
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
								<Form>
									<Row>
										<Col className="pr-md-1" md="5">
											<FormGroup>
												<label>Company (disabled)</label>
												<Input
													defaultValue="Yufa Inc."
													disabled
													placeholder="Company"
													type="text"
												/>
											</FormGroup>
										</Col>
										<Col className="px-md-1" md="3">
											<FormGroup>
												<label>Username</label>
												<Input placeholder="Username" type="text" />
											</FormGroup>
										</Col>
										<Col className="pl-md-1" md="4">
											<FormGroup>
												<label htmlFor="exampleInputEmail1">Email address</label>
												<Input placeholder="Enter your email" type="email" />
											</FormGroup>
										</Col>
									</Row>
									<Row>
										<Col className="pr-md-1" md="6">
											<FormGroup>
												<label>First Name</label>
												<Input placeholder="First Name" type="text" />
											</FormGroup>
										</Col>
										<Col className="pl-md-1" md="6">
											<FormGroup>
												<label>Last Name</label>
												<Input placeholder="Last Name" type="text" />
											</FormGroup>
										</Col>
									</Row>
									<Row>
										<Col md="12">
											<FormGroup>
												<label>Address (optional)</label>
												<Input placeholder="Belkin str 132/25" type="text" />
											</FormGroup>
										</Col>
									</Row>
									<Row>
										<Col className="pr-md-1" md="4">
											<FormGroup>
												<label>City (optional)</label>
												<Input placeholder="City" type="text" />
											</FormGroup>
										</Col>
										<Col className="px-md-1" md="4">
											<FormGroup>
												<label>Country (optional)</label>
												<Input placeholder="Country" type="text" />
											</FormGroup>
										</Col>
										<Col className="pl-md-1" md="4">
											<FormGroup>
												<label>Postal Code (optional)</label>
												<Input placeholder="ZIP Code" type="number" />
											</FormGroup>
										</Col>
									</Row>
									<Row>
										<Col md="12">
											<FormGroup>
												<label>Your BTC wallet address</label>
												<Input placeholder="mjAC5RiC2aqd16btSq2iaE8Ukz5znyTUK8" type="text" />
											</FormGroup>
										</Col>
									</Row>
									<Row>
										<Col md="8">
											<FormGroup>
												<label>Additional information (optional)</label>
												<Input
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
									<ArrLeft />

									<img
										alt="..."
										className="avatar"
										src={require(`../assets/img/avatars/${avatar}.png`).default}
									/>
									<ArrRight />

									<h5 className="title">Mike Andrew</h5>

									<p className="description">Ceo/Co-Founder</p>
								</div>
								<div className="card-description">
									Do not be scared of the truth because we need to restart the human foundation in
									truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the
									back is...
								</div>
							</CardBody>
							<CardFooter>
								<div className="button-container">
									<Button className="btn-icon btn-round" color="facebook">
										<i className="fab fa-facebook" />
									</Button>
									<Button className="btn-icon btn-round" color="twitter">
										<i className="fab fa-twitter" />
									</Button>
									<Button className="btn-icon btn-round" color="google">
										<i className="fab fa-google-plus" />
									</Button>
								</div>
							</CardFooter>
						</Card>
					</Col>
				</Row>
			</div>
		</>
	);
}

export default Registration;
