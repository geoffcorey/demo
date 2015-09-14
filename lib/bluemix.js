/**
 * Module exports.
 * @public
 */
var bluemix = {};
module.exports = bluemix;

/**
 * Returns a string based on number.
 *
 * @public
 * @param {String|Number} number
 * @return {String}
 * */
bluemix.eval = function(number, cb)
{
	/* if modulus of 4 and 7 output 'IBM Bluemix'.
	 * if modulus of just 4 output 'IBM'.
	 * if modulus of just 7 ouptput 'Bluemix'
	 */
	var num = parseInt(number);
	if (num % 4 === 0 && num % 7 === 0)
	{
		cb(null, 'IBM Bluemix');
	}
	else if (num % 4 === 0)
	{
		cb(null, 'IBM');
	}
	else if (num % 7 === 0)
	{
		cb(null, 'Bluemix');
	}
	else
	{
		cb(null, '');
	}
};
