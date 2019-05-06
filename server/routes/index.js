const path = require('path');
const router = require('express').Router();
const authRoutes = require('./authRoutes');
const userRoutes = require("./userRoutes");

router.use("/auth", authRoutes);
router.use("/users", userRoutes);

// If no API routes are hit, send the React app
router.use(function (req, res) {
    if(process.env.NODE_ENV === 'production') {
        res.sendFile(path.join(__dirname, "../../client/build/"));    
    }
    res.sendFile(path.join(__dirname, "../../client/index.html"));
});

module.exports = router;