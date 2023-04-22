const express = require('express');
const router = express.Router();
const Studentmodel = require('../model/Student');

router.post('/student', async (req, res) => {
  console.log(req.body);
  const student = new Studentmodel(req.body);
  await student
    .save()
    .then(() => {
      res.send(student);
      console.log(student);
    })
    .catch((e) => {
      res.send(e);
    });
});

router.get('/student', (req, res) => {

  Studentmodel.find()
    .then((student) => {
      res.json(student);
    })
    .catch((e) => {
      res.send(e);
    });
});

  


module.exports = router;
