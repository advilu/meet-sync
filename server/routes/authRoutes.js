const router = require('express').Router();
const passport = require('passport');

router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

router.get('/google/callback', passport.authenticate('google'), (req, res) => {
    if(process.env.NODE_ENV === 'production') {
        res.redirect('/')
    } else {
        res.redirect('http://localhost:3000/');
    }
    
});

router.get('/zoom/callback'), (req, res) => {
    if(process.env.NODE_ENV === 'production') {
        res.redirect('/')
    } else {
        res.redirect('http://localhost:3000/');
    }
}

module.exports = router;