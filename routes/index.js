var express = require('express');
var router = express.Router();

// mongoose is a API wrapper overtop of mongodb
const mongoose = require("mongoose");

const Sales = require("../dbschema"); //to be used for post method

// edited to include my non-admin, user level account and PW on mongo atlas
// and also to include the name of the mongo DB that the collection
const dbURI = "mongodb+srv://ServerUser:Ruby1997@trupticluster.z4ylf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// Make Mongoose use `findOneAndUpdate()`. Note that this option is `true`
// by default, you need to set it to false.
mongoose.set('useFindAndModify', false);

const options = {
    reconnectTries: Number.MAX_VALUE,
    poolSize: 10
};

mongoose.connect(dbURI, options).then(
    () => {
        console.log("Database connection established!");
    },
    err => {
        console.log("Error connecting Database instance due to: ", err);
    }
);

router.post('/NewSale', function(req, res) {
    var data = req.body;
    let salesObj = new Sales(data);
    const date = new Date();
    salesObj.hourPurch = date.toLocaleTimeString('en-US'); 
    salesObj.dayPurch = date.toLocaleDateString('en-US'); 
    // console.log(" SalesObj ", salesObj);

    salesObj.save((err, postedObj) => {
      if (err) {
        res.status(500).send(err);
      }
      else {
        console.log("Posted Result: ", postedObj);
        res.status(201).json(postedObj);
      }
    });
});

module.exports = router;
