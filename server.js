// package imports

const express = require('express');
const bodyParser = require('body-parser'); 

// call express and define our app using express
const app = express();

// get the instance of express router
const router = express.Router();
 
// setup bodyparser for post request
// it will help to get data from a POST

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

var port = process.env.PORT || 8080;

// Start the server
app.listen(port);
console.log('Magic happens on port Mayaskara ' + port);