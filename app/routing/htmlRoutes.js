
// We need to include the path package to get the correct file path for our html
// Pull in required dependencies
var path = require('path');

//  HTML routes
module.exports = function(app) {
	

	// Home page
	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});

	// Survey page
	app.get('/survey', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/survey.html'));
	});
};
