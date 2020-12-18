const router = require('express').Router();
const controller = require(rootPath + "controllers/example/");

// Routes


// Forward the request to the controller
router.get('/', controller.list);



module.exports = router;

