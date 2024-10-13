const express = require('express');
const accountRouter = require('./accountRoutes');
const adoptionRequestRouter = require('./adoptionProcessRoutes');
const updateRouter = require('./updateRouter');
const router = express.Router();

router.use('/account', accountRouter);
router.use('/adoption', adoptionRequestRouter);
router.use('/update', updateRouter )

module.exports = router;
