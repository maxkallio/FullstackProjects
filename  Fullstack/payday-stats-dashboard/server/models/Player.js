const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    username: { type: String, required: true },
    rank: { type: String, default: "Player" },
    donations: { type: Number, default: 0 },
    score: { type: Number, default: 0 },
    lastSeen: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Player', PlayerSchema);