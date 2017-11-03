var express = require('express')

//create our app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function (req, res, next) {
	if (req.headers['x-forwarded-proto'] === 'https') {
		res.redirect('http://' + req.hostname + req.url);
	} else {
		next();
	}
});

app.use(express.static('public'));

var http = require("http");
setInterval(function() {
    http.get("http://sleepy-lowlands-76380.herokuapp.com/#/?_k=p8majr");
}, 1800000); // every 5 minutes (300000)

app.listen(PORT, function() {
	console.log("Express is running on port " + PORT);
});
