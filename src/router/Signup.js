const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const Signupmodel = require('../model/Signup');
const bcrypt = require('bcryptjs');



router.get('/signup',  (req, res) => {
    console.log('call');
    Signupmodel.find().then((signup) => { res.json(signup)}).catch((e) => { res.send(e) });
});

router.post('/signup', async (req, res) => {
   const {name, email, profession, password, confirmpassword} = req.body;
   if(!name || !email || !profession || !password || !confirmpassword) {
    return res.status(422).json({error: "pls filled every field"});
   }
   try {
    const userExist = await Signupmodel.findOne({email:email});
    if(userExist) {
        return res.status(422).json({error: 'email exist'});
        
       

        } else if(password != confirmpassword){
            return res.status(422).json({error: 'password is not matching'});
    }
    else{
        const signup = new Signupmodel({name, email, profession, password, confirmpassword});
        const userRegister = await signup.save();

    if(userRegister) {
        res.status(201).json({message: "user registered"});
    }else {
        res.status(201).json({error: "failed to registered"});
    }

    }
    
   }
    
    catch(err) {
        console.log(err);

    }
    
});

router.post('/signin', async (req, res) => {
    
    try {
        const{name, email, password} = req.body;
        if(!email || !password) {
            return res.status(400).json({error:"please fill the data"})
        }
        const userLogin = await Signupmodel.findOne({ email: email });

        console.log(userLogin);
        if(userLogin){
            const isMatch = await bcrypt.compare(password, userLogin.password);
            const token = await userLogin.generateAuthToken();
            console.log(token);
            res.cookie("jwtoken", token, {
                expires:new Date(Date.now() + 25892000000),
                httpOnly:true
            }).status(200).json({ msg: "Login Success" });


            console.log(token);
            if(!isMatch) {
                res.json({error:"user error"});
            }else {
                res.json({message:"user signin successfully"});
    
            }
        }
        else {
            res.status(400).json({ error:"inavalid credientials"});
        }
        
    } catch(err) {
        console.log(err);
    }
    
})




router.get('/info',(req, res) => {
    
    console.log('hello ');
    res.send(req.rootUser);
});



module.exports = router;