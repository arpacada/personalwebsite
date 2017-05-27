const express = require('express');
const bodyparser = require('body-parser');
const cookieparser = require('cookie-parser');
const session = require('express-session');
const flash = require('express-flash');
const consolidate = require('consolidate');
const database = require('./database');
const User = require('./models').User;


const app = express();

app.engine('html', consolidate.nunjucks);
app.set('views', './templates');
app.set('routes','./routes');

// app.use(bodyparser.urlencoded());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cookieparser('secret-cookie'));
app.use(session({ resave: false, saveUninitialized: false, secret: 'secret-cookie' }));
app.use(flash());

app.use('/static', express.static('./static'));
app.use(require('./routes/auth-routes'));

app.get('/', function(req, res) {
	console.log('body of render.');
	res.render('index.html');
});




app.listen(37297, function () {
	console.log('Server is now listening at port 37297');
});

