// EXTERNAL MODULES //
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var cors = require('cors');

// CONFIG //
var config = require('./config');

// CONTROLLERS //
var UserCtrl = require('./controllers/UserCtrl');
var serverCtrl = require('../server/serverCtrl');

// SERVICES //
var passport = require('./services/passport');


// POLICIES //
var isAuthed = function(req, res, next) {
  if (!req.isAuthenticated()) return res.status(401).send();
  return next();
};


// EXPRESS //
var app = express();
var corsOptions = {
    origins: 'http://localhost:3000'
}

//USE
app.use(express.static(__dirname + './../public'));
app.use(bodyParser.json());
app.use(cors(corsOptions));

// Session and passport
app.use(session({
  secret: config.SESSION_SECRET,
  saveUninitialized: false,
  resave: false
}));
app.use(passport.initialize());
app.use(passport.session());

// Passport Endpoints
app.post('/login', passport.authenticate('local', {
  successRedirect: '/me'
}));
app.get('/logout', function(req, res, next) {
  req.logout();
  return res.status(200).send('logged out');
});

// User Endpoints
app.post('/register', UserCtrl.register);
app.get('/user', UserCtrl.read);
app.get('/me', isAuthed, UserCtrl.me);
app.put('/user/:_id', isAuthed, UserCtrl.update);

//ENDPOINTS
//PRODUCTS
app.post('/api/products', serverCtrl.createProduct);
app.get('/api/products', serverCtrl.getProducts);
app.get('/api/products/:id', serverCtrl.getProductsID);
app.put('/api/products/:id', serverCtrl.updateProductsID);
app.delete('/api/products/:id', serverCtrl.deleteProductsID);

//USERS
app.post('/api/user/', serverCtrl.createUser);
app.get('/api/user/:id', serverCtrl.getUserID);

//ORDER
app.post('/api/order/:user_id', serverCtrl.createOrderID);
app.get('/api/order/', serverCtrl.getOrder);

//CART
app.post('/api/cart/', serverCtrl.createCartID);
app.put('/api/cart/', serverCtrl.updateCartID);

// CONNECTIONS //
var mongoURI = config.MONGO_URI;
var port = config.PORT;

mongoose.connect(mongoURI);
mongoose.connection.once('open', function() {
  console.log('Connected to Mongo DB at', mongoURI);
  app.listen(port, function() {
    console.log('Listening on port '+ port);
  });
});
