const express = require('express');
const File = require('../models/File');

const router = express.Router();

router.post('/', async (req, res) => {
    const file = new File(req.body);
    await file.save();
    res.json(file);
});

router.get('/', async (req, res) => {
    const files = await File.find();
    res.json(files);
});

module.exports = router;