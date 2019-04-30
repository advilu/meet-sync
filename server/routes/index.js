const path = require('path');
const router = require('express').Router();
const authRoutes = require('./authRoutes');
const userRoutes = require("./userRoutes");

router.use("/auth", authRoutes);
router.use("/users", userRoutes);

// If no API routes are hit, send the React app
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;