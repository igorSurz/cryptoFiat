const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { createJWT } = require('../utils/auth');

const emailRegexp =
	/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

exports.signup = (req, res, next) => {
	let { username, email, password, password_confirmation } = req.body;

	let errors = [];

	if (!username) {
		errors.push({
			username: 'required'
		});
	}

	if (!email) {
		errors.push({
			email: 'required'
		});
	}

	if (!emailRegexp.test(email)) {
		errors.push({
			email: 'invalid'
		});
	}

	if (!password) {
		errors.push({
			password: 'required'
		});
	}

	if (!password_confirmation) {
		errors.push({
			password_confirmation: 'required'
		});
	}

	if (password !== password_confirmation) {
		errors.push({
			password: 'mismatch'
		});
	}

	if (errors.length > 0) {
		return res.status(422).json({
			errors
		});
	}

	User.findOne({
		email: email
	})
		.then(user => {
			if (user) {
				return res.status(422).json({
					errors: [
						{
							user: 'email already exists'
						}
					]
				});
			} else {
				const user = new User({
					username: username,
					email: email,
					password: password,
					fName: '',
					lName: '',
					city: '',
					country: '',
					btcWallet: '',
					additionalInfo: '',
					avatarIdx: 1
				});
				bcrypt.genSalt(10, function (err, salt) {
					bcrypt.hash(password, salt, function (err, hash) {
						if (err) throw err;
						user.password = hash;
						user.save()
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
					});
				});
			}
		})
		.catch(err => {
			res.status(500).json({
				errors: [
					{
						error: 'Something went wrong'
					}
				]
			});
		});
	console.log(errors);
};

exports.signin = (req, res) => {
	let { email, password } = req.body;

	let errors = [];

	if (!email) {
		errors.push({
			email: 'required'
		});
	}

	if (!emailRegexp.test(email)) {
		errors.push({
			email: 'invalid email'
		});
	}

	if (!password) {
		errors.push({
			password: 'required'
		});
	}

	if (errors.length > 0) {
		return res.status(422).json({
			errors
		});
	}

	User.findOne({
		email: email
	})
		.then(user => {
			if (!user) {
				return res.status(404).json({
					errors: [
						{
							user: 'not found'
						}
					]
				});
			} else {
				bcrypt
					.compare(password, user.password)
					.then(isMatch => {
						if (!isMatch) {
							return res.status(400).json({
								errors: [
									{
										password: 'incorrect'
									}
								]
							});
						}
						const token = createJWT({
							email: req.body.email
						});

						jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
							if (err) {
								res.status(500).json({
									errors
								});
							}
							if (decoded) {
								return res.status(200).json({
									success: true,
									token: token,
									message: user
								});
							}
						});
					})
					.catch(err => {
						res.status(500).json({
							errors: 'Something went wrong jwt'
						});
					});
			}
		})
		.catch(err => {
			res.status(500).json({
				errors: 'Something went wrong'
			});
		});
};

exports.update = async (req, res) => {
	const updated = {
		...req.body
	};
	const filter = { _id: req.body.userId };

	const updatedDocument = await User.findOneAndUpdate(filter, updated, { new: true });
	return res.status(200).send(updatedDocument);
};

exports.retrieveuser = async (req, res) => {
	const userId = { _id: req.body.userId };
	const foundUser = await User.findOne({ ...userId }).exec();

	return res.status(200).send(foundUser);
};
