const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// creating schema 

const menuSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  size: {
    type: String,
    required: true,
  },
});

// creating models & exporting

module.exports = Menu = mongoose.model('Menu' ,menuSchema);
