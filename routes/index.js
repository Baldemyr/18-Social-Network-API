//require express 
//require api routes through api folder
const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

//wrong route msg
router.use((req, res) => res.send('Turn Back-wrong route!'));

//export
module.exports = router;