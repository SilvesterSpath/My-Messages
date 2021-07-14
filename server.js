const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

app.get('/', (req, res) => {
  res.json({ message: 'Welcome Messages...' });
});

// Define Routes
app.use('/api/persons', require('./routes/persons'));
app.use('/api/messages', require('./routes/messages'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on potr ${PORT}`);
});
