const Offers = require('../models/Offers');

exports.newOffer = (req, res, next) => {
	let {
		userId,
		status,
		username,
		fName,
		lName,
		country,
		city,
		currency,
		currencyAmount,
		currentCurPrice,
		sellerWallet,
		conditions,
		userPrice
	} = req.body;

	let errors = [];

	if (!userId || !username) {
		errors.push({
			user: 'there is no user data'
		});
	}

	if (!currencyAmount) {
		errors.push({
			currency: 'need specify currency amount of the current deal'
		});
	}

	if (errors.length > 0) {
		return res.status(422).json({
			errors
		});
	}
	const offer = new Offers({
		userId,
		status,
		username,
		fName,
		lName,
		country,
		city,
		currency,
		currencyAmount,
		currentCurPrice,
		sellerWallet,
		conditions,
		userPrice
	});

	offer
		.save()
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

exports.retrieveAllOffers = async (req, res) => {
	const offersList = await Offers.find({});

	return res.status(200).send(offersList);
};

exports.retrieveOffer = async (req, res) => {
	const offerId = { _id: req.body.offerId };
	const foundOffer = await Offers.findOne({ ...offerId }).exec();

	return res.status(200).send(foundOffer);
};
