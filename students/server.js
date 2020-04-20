const express = require('express');
const app = express();

// Importing Routes
const Routes = require("./routes/routes");

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(
    express.urlencoded({
        extended: false,
    }),
);
app.use(express.json());

//Routes
app.use(require('./routes/routes'));

module.exports = app;