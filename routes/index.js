var express = require('express');
var router = express.Router();

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

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('`index.html', { title: 'Express' });
});

module.exports = router;
