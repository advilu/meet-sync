const db = require('../models');

module.exports = {

    // Get all the surveys by the currently logged in user
    getSurveys: (req, res) => {
        db.Survey.find({
            where: {
                id: req.user.id
            }.then((dbPost) => {
                res.json(dbPost);
            })
        })
    }
}