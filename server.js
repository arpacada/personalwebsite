//server.js// will be using express
var express = require('express');
var consolidate = require('consolidate');
var app = express(); //for routing



app.set('views', './templates'); //locate html files//rendering html templates easier
app.engine('html', consolidate.nunjucks);
app.get('/', function (request, response) { //routing to the path
		//response.send('hello'); //combined response.write(contents) and response.end(); 
   // response.send('<h1>hello home page</h1>');
   console.log("You are at the home page.");
   response.render('index.html');
});
app.use('/static', express.static('./static'));
//or 
//app.post('/', function(){});//checks the path 
app.get('/home', function (request, response) {
	//response.send('profile page'); 
  //response.send('<h1>profile page</h1>'); //may accept html code 
   response.render('index.html');
  //response.send('index');
});
app.get('/about', function (request, response) {
	//response.send('profile page'); 
  //response.send('<h1>profile page</h1>'); //may accept html code 
   response.render('index.html');
  //response.send('index');
});
app.get('/contact', function (request, response) {
	//response.send('profile page'); 
  //response.send('<h1>profile page</h1>'); //may accept html code 
   response.render('index.html');
  //response.send('index');
});
app.get('/portfolio', function (request, response) {
	//response.send('profile page'); 
  //response.send('<h1>profile page</h1>'); //may accept html code 
   response.render('index.html');
  //response.send('index');
});
//run the server

app.listen(3000, function () {
	console.log('Server is now listening at port 3000');
});
