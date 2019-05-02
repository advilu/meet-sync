const router = require('express').Router();


router.get('/', async (req, res) => { // url /users/
    console.log('Inside userRoutes ....')
    // console.dir( req.user );
    // console.log(req.user);
    res.json(req.user);
});

module.exports = router;