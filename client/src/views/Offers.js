import axios from 'axios';
import React, { useEffect, useState } from 'react';
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
	Collapse,
	Alert
} from 'reactstrap';

import Spinner from '../components/Spinner/Spinner';

function Offers() {
	const [isOpen, setIsOpen] = useState(true);
	const [tableRowOpen, setTableRowOpen] = useState({ trId: '', trIsOpen: false });
	const [offers, setOffers] = useState('');
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		try {
			axios.post(`/api/alloffers`).then(async res => {
				if (res.data) {
					setOffers(res.data);
					setLoading(false);
				}
			});
		} catch (e) {
			console.log(e);
		}
	}, []);

	// const onOpen = e => {
	// 	console.log(e.target.id);
	// 	let collapseElement = document.querySelector(`#key${e.target.id}`);

	// 	if (collapseElement) collapseElement.classList.toggle('show');

	// 	// let firstChild = b.firstChild;
	// 	// console.log(firstChild);
	// };

	// const onClose = e => {
	// 	e.stopPropagation();
	// 	console.log(e.target.id);
	// 	let collapseElement = document.querySelector(`#key${e.target.id}`);

	// 	if (collapseElement) collapseElement.classList.remove('show');

	// 	// let firstChild = b.firstChild;
	// 	// console.log(firstChild);
	// };

	const collapse = offer => {
		return (
			<Collapse
				isOpen
				onClick={e => {
					e.stopPropagation();
					setTableRowOpen(prevState => ({ ...prevState, isOpen: false }));
				}}>
				<Alert
					style={{
						marginTop: '10px',
						width: '50%'
					}}>
					Username: {offer.username} <br />
					Name: {offer.fName} {offer.lName} <br />
					{offer.conditions}
				</Alert>
			</Collapse>
		);
	};

	const mapOffers = stat => {
		return offers.map(offer => {
			if (offer.status === stat) {
				return (
					<tr
						key={offer._id}
						onClick={() => setTableRowOpen({ trId: offer._id, isOpen: true })}>
						<td>
							{tableRowOpen.trId === offer._id && tableRowOpen.isOpen
								? null
								: offer.username}

							{tableRowOpen.trId === offer._id
								? tableRowOpen.isOpen && collapse(offer)
								: null}
						</td>
						<td>
							<i className="tim-icons icon-shape-star" />
							<i className="tim-icons icon-shape-star" />
							<i className="tim-icons icon-shape-star" />
						</td>
						<td>{offer.country}</td>
						<td>{offer.city}</td>
						<td className="text-center">${offer.userPrice}</td>
						<td className="text-center">B {offer.currencyAmount}</td>
					</tr>
				);
			}
		});
	};

	return (
		<>
			<div className="content">
				<Row>
					<Col md="12">
						<Card>
							<CardHeader>
								<CardTitle tag="h4">Buyers</CardTitle>
								<p className="category">Here you can sell your cryptocurrency</p>
							</CardHeader>
							<CardBody>
								{loading ? (
									<Spinner />
								) : (
									<Table className="table-hover table-active" responsive>
										<thead>
											<tr>
												<th>Username</th>
												<th>Rating</th>
												<th>Country</th>
												<th>City</th>
												<th className="text-center">Buyer Price USD</th>
												<th className="text-center">Amount BTC</th>
											</tr>
										</thead>
										<tbody>{mapOffers('Buyer')}</tbody>
									</Table>
								)}
							</CardBody>
						</Card>
					</Col>
					<Col md="12">
						<Card className="card-plain">
							<CardHeader>
								<CardTitle tag="h4">Sellers</CardTitle>
								<p className="category">Here you can buy your cryptocurrency</p>
							</CardHeader>
							<CardBody>
								{loading ? (
									<Spinner />
								) : (
									<Table className="table-dark table-hover " responsive>
										<thead className="text-primary">
											<tr>
												<th>Username</th>
												<th>Rating</th>
												<th>Country</th>
												<th>City</th>
												<th className="text-center">Seller Price USD</th>
												<th className="text-center">Amount BTC</th>
											</tr>
										</thead>
										<tbody>{mapOffers('Seller')}</tbody>
									</Table>
								)}
							</CardBody>
						</Card>
					</Col>
				</Row>
			</div>
		</>
	);
}

export default Offers;
