const viewOwnReport = (req, res, next, err) => {
    if(req.user.id === req.query.id || req.user.dataValues.isManager === 1) {
       next()
    } else {
        res.status(401).send("You need a promotion or three to view this!");
    }
};

module.exports = viewOwnReport;