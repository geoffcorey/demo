var express = require('express');
var router = express.Router();
var bluemix = require('../lib/bluemix');

router.post('/', function(req, res, next)
{
	console.log(req.body);
	bluemix.eval(req.body.number, function(err, result)
	{
		if (err)
		{
			res.send(err);
		}
		else
		{
			res.send(result);
		}
	});
});

module.exports = router;
