const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const path = require('path');
//import routes
const authRoutes = require('./src/routes/auth')
const chartRoute = require('./src/routes/chart')


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
// app.use(bodyParser.json()); //deprecated
app.use(express.json({ extended: true})) //instead of bodyParser
app.use(cors());
//routes middleware
app.use('/api', authRoutes);
app.use('/api', chartRoute);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});




const port = process.env.PORT || 8000;
app.listen(port, () => { 
  console.log(`Server is running on ${port}`)
});



app.use(express.static(path.join(__dirname,"client", "build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname,"client", "build", "index.html"));
});