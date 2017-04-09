const mongoose = require('mongoose');
const config = require('../config/database');

// Poke schema
const PokeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  nature: {
    type: String,
    required: true
  },
  ability: {
    type: String,
    required: true
  },
  move1: {
    type: String,
    required: true
  },
  move2: {
    type: String,
    required: true
  },
  move3: {
    type: String,
    required: true
  },
  move4: {
    type: String,
    required: true
  },
  plan: {
    type: String,
    required: true
  }
});

const Poke = module.exports = mongoose.model('Poke', PokeSchema);

module.exports.addPoke = function(newPoke, callback) {
  newPoke.save(callback);
}
