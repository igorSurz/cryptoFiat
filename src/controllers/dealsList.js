const Deals = require('../models/Deals');

exports.newDeal = (req, res, next) => {
	let { buyerId, sellerId, buyerName, sellerName, country, city, amountBtc, currentBtcPrice } =
		req.body;

	let errors = [];

	if (!buyerId || !sellerId) {
		errors.push({
			participants: 'there is no buyer or seller'
		});
	}

	if (!amountBtc) {
		errors.push({
			btc: 'need specify amount btc of the current deal'
		});
	}

	if (errors.length > 0) {
		return res.status(422).json({
			errors
		});
	}
	const deal = new Deals({
		buyerId,
		sellerId,
		buyerName,
		sellerName,
		country,
		city,
		amountBtc,
		currentBtcPrice
	});

	deal.save()
		.then(response => {
			res.status(200).json({
				success: true,
				result: response
			});
		})
		.catch(err => {
			res.status(500).json({
				errors: [
					{
						error: err
					}
				]
			});
		});
};
