const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const path = require('path');
//import routes
const authRoutes = require('./src/routes/auth');


// const { db } = require('./models/User');
//app
const app = express();
// db
mongoose
  .connect(process.env.MONGODB_URI,{ 
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
   })
  .then(() => console.log('DB Connected'));
//middlewares
app.use(bodyParser.json());
app.use(cors());
//routes middleware
app.use('/api', authRoutes);

const port = process.env.PORT || 8000;
app.listen(port, () => { 
  console.log(`Server is running on ${port}`)
});



app.use(express.static(path.join(__dirname,"client", "build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname,"client", "build", "index.html"));
});