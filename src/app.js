const mongoose = require('mongoose');
require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');


const bodyParser = require('body-parser');
const cors = require('cors');

const StudentRouter = require('./router/Student');
const SignupRouter = require('./router/Signup');

const PORT = process.env.PORT || 5000;
require('./db/db');
const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.options('*', cors());

app.use(StudentRouter);
app.use(SignupRouter);



app.listen(PORT, () => {
  console.log('Server is running on', PORT);
});


