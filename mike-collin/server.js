'use strict';

//Load Express
const express = require('express');

//Instantiating Express 
const app = express();


//defining the directory
app.use(express.static('./public'));


const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;

app.post('/articles', bodyParser, function(request, response) {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.send('Record posted to server!!');
})

//telling the app to listen...
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));