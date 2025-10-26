require('dotenv').config();
const express = require('express');
const connectDb = require("./config/db")
const authRoutes = require("./routes/userRoutes")

const app = express();


app.use(express.json());


app.use('/users', authRoutes);
app.get('/', (req, res) => {
    res.send('✅ Wellness Tracker backend is running');
  });
connectDb()
  // Start the server
  const PORT =  4300;
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });