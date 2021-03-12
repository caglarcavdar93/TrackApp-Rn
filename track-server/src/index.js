require("./models/User");
require("./models/Track");
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require("./routes/authRoutes");
const bodyParser = require("body-parser");
const trackRoutes=require("./routes/trackRoutes");
const requireAuth = require("./middlewares/requireAuth");
const app = express();
app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);
const mongoUri = "<your mongodb uri>";
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true
});
mongoose.connection.on('connected', () => {
    console.log('Connected to mongo instance');
});
mongoose.connection.on('error', (err) => {
    console.log('Error:', err);
});


app.get('/', requireAuth, (req, res) => {
    res.send(`Your email: ${req.user.email}`);
});

app.listen(3000, () => {
    console.log("Listening from 3000 port")
});