const { Int32, Double, Long } = require("mongodb");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;
  // Define a MongoDB schema and model (for example, a "Book" model)

  const gameSchema = new Schema({

    Name : {
        type: String,
    },

    Url : {
        type: String,
    },

    Authors : {
        type: String,
    },

    Published_date : {
        type: Date,
    },

  });

  module.exports = mongoose.model("Game", gameSchema);


