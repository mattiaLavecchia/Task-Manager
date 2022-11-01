
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://mattia:1234567890@cluster0.n9dyajh.mongodb.net/?retryWrites=true&w=majority').then(() => {
    console.log("Connected to MongoDb successfully ");
}).catch((e) => {
    console.log("error while attempting to connect to mongoDb");
    console.log(e);
});

//DEVO CONNETERE DATABSE

module.exports = {
     mongoose
};