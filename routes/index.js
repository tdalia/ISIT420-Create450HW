var express = require('express');
var router = express.Router();

// mongoose is a API wrapper overtop of mongodb, just like
// .ADO.Net is a wrapper over raw SQL server interface
const mongoose = require("mongoose");

//const sales = require("../dbschema"); //to be used for post method

// edited to include my non-admin, user level account and PW on mongo atlas
// and also to include the name of the mongo DB that the collection

const dbURI = "mongodb+srv://ServerUser:Ruby1997@trupticluster.z4ylf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// Make Mongoose use `findOneAndUpdate()`. Note that this option is `true`
// by default, you need to set it to false.
//mongoose.set('useFindAndModify', false);

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

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('`index.html', { title: 'Express' });
});


/* GET all Sale */
router.get('/dbschema', function (req, res) {
    // find {  takes values, but leaving it blank gets all}
    HW.find({}, (err, AllHWs) => {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        }
        res.status(200).json(AllHWs);
    });
});



module.exports = router;
