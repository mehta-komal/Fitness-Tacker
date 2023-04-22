const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Student = new Schema({
    name: 'string',
    sets: 'number',
    reps: 'number',
    unit: 'number',
    date: 'date'
   
    
    

});


const StudentModel = mongoose.model('Student', Student);


module.exports = StudentModel;