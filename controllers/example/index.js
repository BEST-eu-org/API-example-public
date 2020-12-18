const service = require (rootPath + 'services/example');
const { query, param, body, validationResult } = require('express-validator');

// These validators don't serve any purpose and are generally not used in combination (param, body and query), they are here just as an example of different usecases
const listValidation = [
    // Check if optional query parameter param1 contains only letters
    query('param1').optional().isAlpha().withMessage('param1 must be only letters'),

    // Check if required query parameter param2 has only two letters (e.g., it represents a country code)
    query('param2').isAlpha().isLength({min: 2, max:2}).withMessage('param2 must be exactly two letters')

];

    //Check if username url parameter contains only letter (e.g., username in /api/users/:username)
    //param('accountNumber').isAlpha(),

    //Check if body contains email field and it is a real email (usually you don't expect data in url and body, but this is just an example to show different usecases)
    //body('email').exists().isEmail(),

exports.list = [ 
    listValidation, 
    async (req, res, next) => { 
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        } else {
            try {
                // get data from the service
                data = await service.getExampleData(req.params);
                // send statuscode back together with data
                res.status(200).json(data);
                // call next function in middleware
                next();
          } catch(e) {
              console.log("ERROR: " + e.message);
                res.status(500);
                next(e);
              }
        }
    }
];
