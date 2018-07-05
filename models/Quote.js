var mongoose = require('mongoose');

var QuoteSchema = new mongoose.Schema({
    product: String,
    product_id: {type: Number},
    quote_by: String,
    quote: String,
    currency: String,
    comment: String,
    estimated_date: { type: Date, default: Date.now },
  });

  module.exports = mongoose.model('Quote', QuoteSchema);