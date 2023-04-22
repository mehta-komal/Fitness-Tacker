// require('dotenv').config();
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');


const Signup = new Schema({
    name: {
        type: String,
        required: true,
        
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max:30,
        
  },
    password: { 
        type: String,
        required: true,
        min:6

    },
   
    confirmpassword: { 
        type: String,
        required: true,
        min:6
    },
    
    tokens: [
        {
            token: {
                type:String,
                required:true
            }
        }
    ]
    

});


Signup.pre('save', async function (next){
    console.log('i am here');
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 12);
        this.confirmpassword = await bcrypt.hash(this.confirmpassword, 12);
    }
    next();

});

Signup.methods.generateAuthToken=async function (){
    
    try{
        let token = jwt.sign({_id:this._id}, 'MYNAMEISKOMALMEHTAIAMANINTERNMCATGS');
        console.log(token);
        this.tokens=this.tokens.concat({token: token});
        await this.save();
        console.log(token, "token");
        return token;
    } catch (err) {
        console.log(err);
    }
}




const SignupModel = mongoose.model('Signup', Signup);


module.exports = SignupModel;