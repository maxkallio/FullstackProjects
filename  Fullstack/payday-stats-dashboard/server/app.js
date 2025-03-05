const express = require('express');
const mongoose = require('mongoose');
const statsRoutes = require('./routes/stats');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/payday', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api', statsRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));