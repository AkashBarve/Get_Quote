var mongoose = require('mongoose');

var ReqSchema = new mongoose.Schema({
    product: String,
    product_id: { type: Number},
    quantity: String,
    description: String,
    site: String,
    requirement_date: { type: Date, default: Date.now },
  });

  module.exports = mongoose.model('Requirement', ReqSchema);