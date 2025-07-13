const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB Error:', err));

app.get('/', (req, res) => res.send('🚀 API is working!'));

app.listen(3000, () => console.log('Server is running on port 3000'));
