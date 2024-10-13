const express = require("express");
const router = express.Router();
const rescuerController = require('../controllers/rescuerController')
const { isAuthenticated } = require("../middleware");

router.get('/followup', isAuthenticated, rescuerController.followUps)
router.get('/announcement', isAuthenticated, rescuerController.announcements);
router.get('/announcement/:pet_id', isAuthenticated, rescuerController.getAnAnnouncements);
router.post('/announcement', isAuthenticated, rescuerController.newPetAnnouncement);

module.exports = router;