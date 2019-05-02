const requireLogin = (req, res, next, err) => {
    if(!req.user) {
        res.status(401).send("You need to be logged in to do that!");
    } else {
        next();
    }
};

module.exports = requireLogin;