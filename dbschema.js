
// mongoose is a API wrapper overtop of mongodb, just like
// .ADO.Net is a wrapper over raw SQL server interface
const mongoose = require("mongoose");

// here we define a schema for our document database
// mongo does not need this, but using mongoose and requiring a 
// schema will enforce consistency in all our documents (records)
const Schema = mongoose.Schema;

// ClassName, AssignmentName, Submitted, Score

const SalesSchema = new Schema({
    storeID: {
        type: Number,
        required: true
    },
    salesPersonID: {
        type: Number,
        required: true
    },
    cdID: {
        type: Number,
        required: true
    },
    pricePaid: {
        type: Number,
        required: true
    },
    hourPuch: {
        type: Date,
        default: Date.now,
        required: true
    },
    dayPuch: {
        type: Date,
        default: Date.Date,
        required: time
    }
});

// Collection name : 450trans
const salesModel = mongoose.model("Sales", SalesSchema, "450trans");
module.exports = salesModel; 