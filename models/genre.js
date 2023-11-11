const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//The model should have a String SchemaType called name to describe the genre.
const genreSchema = new Schema({
  name: { type: String, required: true, minLength: 3, maxLength: 100 },
});

//Declare a virtual for the genre's URL, named url.
genreSchema.virtual("url").get(function () {
  return `/catalog/genre/${this._id}`;
});

// export module
module.exports = mongoose.model("Genre", genreSchema);
