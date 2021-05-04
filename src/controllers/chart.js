var request = require('request');

exports.chart = (req, res, next) => {  
        request({
            method: 'GET',
            uri: 'https://api.blockchain.info/charts/market-price?timespan=10weeks&rollingAverage=8hours&format=json'
          }, function (error, response, body){
            if(!error && response.statusCode === 200){
              res.json(body);
            } 
            
         })
        
      
}