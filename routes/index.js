//require express and api routes 
const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

//wrong route msg
router.use((req, res) => res.send('Turn Back-wrong route!'));

//export
module.exports = router;