const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// creating schema

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      default: "customer",
    },
  },
  { timestamps: true }
);

// creating models & exporting

module.exports = User = mongoose.model("User", userSchema);
