require('dotenv').config();
const express = require('express');
const passport = require('passport');
const cookieSession = require('cookie-session');
const routes = require("./routes");
const app = express();
const port = process.env.PORT || 3001;
const db = require("./models");

require('./services/passport');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
    cookieSession({
        // the maxAge setting tells the browser how long it will take before this cookie expires
        // here I set it to 30 days. It has to be passed as milliseconds
        maxAge: 30 * 60 * 1000,
        // this keys setting will be used to sign and encrypt our cookie
        // we can specify multiple keys here
        // it will use a random one to encrypt the cookie if you pass more keys
        keys: ['asjoufbdhasfasfgauidyagdss']
    })
);
// These tells passport to use cookies to handle authentication
// once these functions run, our User model instance will be added to req.user
app.use(passport.initialize());
app.use(passport.session());
app.use(routes);

db.sequelize.sync({ force: false }).then(() => {
    app.listen(port, () => console.log(`We hear you on port ${port}!`));
});
