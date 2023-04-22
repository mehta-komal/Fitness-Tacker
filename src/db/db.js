const mongoose = require('mongoose');
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false,  
    maxPoolSize: 10, 
    serverSelectionTimeoutMS: 5000, 
    socketTimeoutMS: 45000, 
    family: 4
  }



mongoose.connect("mongodb://localhost:27017/FitnessDB", options)
    .then(() => console.log("Connection successful")).catch((err) => console.log(err));
