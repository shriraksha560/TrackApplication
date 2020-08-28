// const express = require('express');

// const mongoose = require('mongoose');
// const jwt = require('jsonwebtoken');
// const User = mongoose.model('User');
// const router = express.Router();

// router.post('/signup', async (req, res) => {
//   console.log(req.body);
//   res.send('You made a post request!!');

//   const {email, password} = req.body;
//   console.log('try catch start');
//   try {
//     console.log('try catch start-1');

//     const user = new User({email, password});
//     console.log('try catch start-2');

//     user.save();
//     console.log('try catch start-3');

//     const token = jwt.sign({userId: user._id}, 'MY_SECRET_KEY');
//     console.log('try catch start-4');

//     res.send({token});
//     console.log('try catch start-5');
//   } catch (err) {
//     console.log('ERROR :' + err);
//     //  return res.status(422).send(err.message);
//   }
// });

// module.exports = router;

const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = mongoose.model('User');
const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    const {email, password} = req.body;

    const user = new User({email, password});

    await user.save();
    const token = jwt.sign({userId: user._id}, 'MY_SECRET_KEY');
    res.send({token});
  } catch (err) {
    return res.status(422).send(err.message);
  }
});

router.post('/signin', async (req, res) => {
  const {email, password} = req.body;
  if (!email || !password) {
    return res.status(422).send({error: 'Must provide email and password'});
  }
  const user = await User.findOne({email});
  if (!user) {
    return res.status(422).send({error: 'Invalid password or email in user!!'});
  }
  try {
    console.log(user);
    user.comparePassword({password});
    const token = jwt.sign({userId: user._id}, 'MY_SECRET_KEY');
    res.send({token});
  } catch (e) {
    console.log(e);
    return res.status(422).send({error: e});
  }
});

module.exports = router;
