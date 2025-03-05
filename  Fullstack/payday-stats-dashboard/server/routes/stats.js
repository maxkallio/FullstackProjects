const express = require('express');
const router = express.Router();
const Player = require('../models/Player');

router.get('/stats', async (req, res) => {
    try {
        const players = await Player.find().sort({ score: -1 }).limit(10);
        res.json(players);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;