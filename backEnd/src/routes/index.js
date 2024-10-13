const express = require('express')
const router = express.Router()
const userRoutes = require('./userRoutes')
const authRoutes = require('./authRoutes')
const accountRouter = require('./accountRoutes');
const adoptionRequestRouter = require('./adoptionProcessRoutes');
const updateRouter = require('./updateRouter');
const rescuerRoutes = require('./rescuerRoutes')

router.use('/users', userRoutes)
router.use('/auth', authRoutes)
router.use('/rescuer', rescuerRoutes)
router.use('/account', accountRouter);
router.use('/adoption', adoptionRequestRouter);
router.use('/update', updateRouter )

module.exports = router;
