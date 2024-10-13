const express = require('express')
const router = express.Router()
const userRoutes = require('./userRoutes')
const authRoutes = require('./authRoutes')
const rescuerRoutes = require('./rescuerRoutes')

router.use('/users', userRoutes)
router.use('/auth', authRoutes)
router.use('/rescuer', rescuerRoutes)

module.exports = router