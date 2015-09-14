var assert = require('assert');
var should = require('should');

describe('lib/bluemix', function()
{
	var bluemix = require('../lib/bluemix');
	describe('Output', function()
	{
		it('input %4 but not %7', function()
		{
			bluemix.eval(8, function(err, result)
			{
				should.not.exist(err);
				should.exist(result);
				result.should.eql('IBM');
			});
		});
		it('input not %4 but %7', function()
		{
			bluemix.eval(14, function(err, result)
			{
				should.not.exist(err);
				should.exist(result);
				result.should.eql('Bluemix');
			});
		});
		it('input %4 and %7', function()
		{
			bluemix.eval(28, function(err, result)
			{
				should.not.exist(err);
				should.exist(result);
				result.should.eql('IBM Bluemix');
			});
		});
		it('input not %4 but not %7', function()
		{
			bluemix.eval(9, function(err, result)
			{
				should.not.exist(err);
				result.should.be.empty('');
			});
		});
		it('input not a number', function()
		{
			bluemix.eval('a', function(err, result)
			{
				should.not.exist(err);
				should.exist(result);
				result.should.be.empty('');
			});
		});
	});
})
