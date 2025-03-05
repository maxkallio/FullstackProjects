const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    imageUrl: String
});

module.exports = mongoose.model('Item', ItemSchema);