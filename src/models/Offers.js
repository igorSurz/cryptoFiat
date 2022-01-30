const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let offer = new Schema(
	{
		userId: {
			type: String,
			required: true
		},
		status: {
			type: String,
			required: true
		},
		username: {
			type: String,
			required: true
		},
		fName: {
			type: String,
			required: true
		},
		lName: {
			type: String,
			required: true
		},
		country: {
			type: String,
			required: true
		},
		city: {
			type: String,
			required: true
		},
		currency: {
			type: String,
			required: true
		},
		currencyAmount: {
			type: Number,
			required: true
		},
		currentCurPrice: {
			type: Number
		},
		userPrice: {
			type: Number
		},
		conditions: {
			type: String
		},
		sellerWallet: {
			type: String
		}
	},
	{
		timestamps: true,
		collection: 'offers'
	}
);

module.exports = mongoose.model('Offer', offer);
