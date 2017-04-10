const express = require('express');
const router = express.Router();
const passport = require('passport');
const config = require('../config/database');
const Poke = require('../models/poke');

// Register
router.post('/pokeplanner', (req, res, next) => {
  let newPoke = new Poke({
    nickname: req.body.nickname,
    nature: req.body.nature,
    ability: req.body.ability,
    move1: req.body.move1,
    move2: req.body.move2,
    move3: req.body.move3,
    move4: req.body.move4,
    plan: req.body.plan
  });

  Poke.addPoke(newPoke, (err, poke) => {
    if(err){
      res.json({success: false, msg:'Failed to register pokemon.'});
    } else {
      res.json({success: true, msg:'Pokemon registered!'});
    }
  })
});

// Box


module.exports = router;
