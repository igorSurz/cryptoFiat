const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema(
	{
		username: {
			type: String,
			required: true
		},
		email: {
			type: String,
			required: true
		},
		password: {
			type: String,
			required: true
		},
		fName: {
			type: String
		},
		lName: {
			type: String
		},
		city: {
			type: String
		},
		country: {
			type: String
		},
		btcWallet: {
			type: String
		},
		additionalInfo: {
			type: String
		},
		avatarIdx: {
			type: String
		}
	},
	{
		timestamps: true,
		collection: 'users'
	}
);

module.exports = mongoose.model('User', userSchema);
