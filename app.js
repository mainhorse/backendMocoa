const express = require('express');
const app = express();
const cors = require('cors');

const userRoute = require('./Route/UserRoutes');

app.use(express.json());
app.use(cors());

app.use('/api', userRoute);


module.exports = app;