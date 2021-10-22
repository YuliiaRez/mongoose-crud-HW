const yup = require("yup");

module.exports.STORAGE_VALIDATION_SCHEMA = yup.number().min(8).max(512);
