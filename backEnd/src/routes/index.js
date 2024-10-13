const express = require('express')
const router = express.Router()
const userRoutes = require('./userRoutes')
const authRoutes = require('./authRoutes')
const accountRouter = require('./accountRoutes');
const adoptionRequestRouter = require('./adoptionProcessRoutes');
const updateRoute = require('./updateRouter');
const rescuerRoutes = require('./rescuerRoutes');
const singlePetRoute = require('./singlePetRoute');
const followUpRouter = require('./followUpRouter')

router.use('/users', userRoutes)
router.use('/auth', authRoutes)
router.use('/rescuer', rescuerRoutes)
router.use('/account', accountRouter);
router.use('/adoption', adoptionRequestRouter);
router.use('/update', updateRoute);
router.use('/pet', singlePetRoute);
//router.use('/followUp', followUpRouter);

module.exports = router;
