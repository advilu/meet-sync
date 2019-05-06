require('dotenv').config();
const express = require('express');
const passport = require('passport');
const cookieSession = require('cookie-session');
const routes = require("./routes");
const app = express();
const port = process.env.PORT || 3001;
const isManager = require("./middlewares/isManager");
const requireLogin = require("./middlewares/requireLogin");
const viewOwnReports = require("./middlewares/viewOwnReports");
const db = require("./models");

require('./services/passport');

app.use(express.static('../client'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
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

// POST route for saving a new post
app.post("/survey", requireLogin,  (req, res) => {
    console.log(req.body);
    /////////////-->here use Sequelize to save req.body to mysql;
    db.Survey.create(req.body).then((result) => {
        //   console.log("read this:", result);
          res.json(result);
          
        });
});

app.get("/give/me/something", function(req, res){
    res.json({message: 'something'})
})


app.use(routes);

const apiRoutes = require('./routes/apiRoutes');
app.use('/api', apiRoutes);






//grabbing the survey results
// const week = document.getElementById("#week");
// const prioritizing = document.getElementById("#prioritizing");
// const clarity = document.getElementById("#clarity");
// const satisfaction = document.getElementById("#satisfaction");
// const team = document.getElementById("#week");
// const forward = document.getElementById("#forward");
// const inclusion = document.getElementById("#inclusion");
// const wentWell = document.getElementById("#wentWell");
// const proud = document.getElementById("#proud");
// const goals = document.getElementById("#goals");
// const roadblocks = document.getElementById("#roadblocks");
// const pdCurrent = document.getElementById("#week");
// const pdUpdate = document.getElementById("#pdUpdate");
// const selfReview = document.getElementById("#selfReview");
// const managerFeedback = document.getElementById("#managerFeedback");
// const stretch = document.getElementById("#stretch");
// const funView = document.getElementById("#funView");
// const desired = document.getElementById("#desired");
// const strength = document.getElementById("#strength");
// const submitButton = document.getElementById("#submitButton");
// const text = document.getElementsByTagName("input");

// submitButton.onclick = newSurvey = (event) => {
//     event.preventDefault;
    
//     if (!text.val().trim()) {
//         return;
//     }


// }


//express routes below for the survey


// Get route for retrieving a single post
app.get("/survey/:id", requireLogin, viewOwnReports, (req, res) => {
    db.Post.findOne({
        where: {
            id: req.params.id   //maybe use req.user?
        }.then((dbPost) => {
            res.json(dbPost);
        })
    })
});

// DELETE route for deleting posts
app.delete("/survey/:id", requireLogin, isManager, function(req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbPost) {
        res.json(dbPost);
      });
  });


db.sequelize.sync({ force: true }).then(() => {
    app.listen(port, () => console.log(`We hear you on port ${port}!`));
});
