const router = require('express').Router();

const surveyRoutes = require('./surveyRoutes');

// Inside here we have /api prepended

router.use('/survey', surveyRoutes);

module.exports = router;

