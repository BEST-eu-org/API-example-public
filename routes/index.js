const router = require('express').Router();

 
router.use('/example', require('./example/'));

// Uncomment the next lines as they are being implemented. Node will throw an error if the required files do not exist.
//router.use('/surveys', require('./surveys/'));
//router.use('/statistics', require('./statistics/'));
//router.use('/helpdesk', require('./helpdesk/'));
//router.use('/documents', require('./documents/'));
//router.use('/vip', require('./vip/'));
//router.use('/taskmanager', require('./taskmanager/'));
//router.use('/search', require('./search/'));
//router.use('/positiontracker', require('./positiontracker/'));
//router.use('/example', require('./example/'));
//router.use('/training', require('./training/'));
//router.use('/lbgs', require('./lbgs/'));
//router.use('/marketingmaterials', require('./marketingmaterials/'));
//router.use('/hrtool', require('./hrtool/'));
//router.use('/archives', require('./archives/'));
//router.use('/wikis', require('./wikis/'));
//router.use('/pws', require('./pws/'));
//router.use('/ipp', require('./ipp/'));
//router.use('/taskdatabase', require('./taskdatabase/'));
//router.use('/finances', require('./finances/'));
//router.use('/users', require('./users/'));
//router.use('/regions', require('./regions/'));


module.exports = router;
