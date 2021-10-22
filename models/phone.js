const mongoose = require("mongoose");
const { Schema } = mongoose;
const { STORAGE_VALIDATION_SCHEMA } = require("../utils/validationSchemas");

const phoneSchema = new Schema({
  model: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  releaseYear: {
    type: Date,
    validate: {
      validator: (date) => new Date(date) < new Date(),
    },
  },
  isNFC: {
    type: Boolean,
    default: false,
  },
  storage: {
    type: Number,
    validate: {
      validator: (value) => STORAGE_VALIDATION_SCHEMA.isValidSync(value),
    },
  },
  display: {
    type: Number,
    min: 5,
  },
});

const Phone = mongoose.model("phones", phoneSchema);

module.exports = Phone;
