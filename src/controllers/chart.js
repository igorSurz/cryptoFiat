const request = require('request');

exports.chart = (req, res, next) => {
	request(
		{
			method: 'GET',
			uri: 'https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_MONTHLY&symbol=BTC&market=CNY&apikey=demo'
		},
		function (error, response, body) {
			if (!error && response.statusCode === 200) {
				res.send(body);
			}
		}
	);
};

exports.currentPrice = (req, res, next) => {
	request(
		{
			method: 'GET',
			uri: 'https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=CNY&apikey=demo'
		},
		function (error, response, body) {
			if (!error && response.statusCode === 200) {
				res.send(body);
			}
		}
	);
};
