const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const homeRoutes = require('./routes/home');
const userRoutes = require('./routes/user');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(userRoutes);
app.use(homeRoutes);

app.listen(4000);