const router = require('express').Router();
const surveyController = require('./../../controllers/surveyController');
const requireLogin = require('./../../middlewares/requireLogin');
// prepended /api/survey

router.route('/')
    .get(requireLogin, surveyController.getSurveys)


module.exports = router;