const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const uploadRoutes = require('./routes/upload');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/file-sharing', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use('/upload', uploadRoutes);

app.listen(5005, () => console.log("File Sharing Service running on port 5005"));