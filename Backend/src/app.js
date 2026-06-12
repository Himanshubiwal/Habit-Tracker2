const express = require('express');
const cookeParser = require('cookie-parser');
const authRoutes = require('./routes/auth.route');
const cores = require('cors');


const app = express();



app.use(express.json());
app.use(cookeParser());
app.use(cores({
    origin: 'http://localhost:5173',
    credentials: true,
}));
module.exports = app;
app.use('/api/auth', authRoutes);


module.exports = app;
