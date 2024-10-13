const express = require("express");
const router = express.Router();
const rescuerController = require('../controllers/rescuerController')
const { isAuthenticated } = require("../middleware");

// Announcements
router.get('/announcement', isAuthenticated, rescuerController.announcements);
router.get('/announcement/:pet_id', isAuthenticated, rescuerController.getAnAnnouncements);
router.post('/announcement', isAuthenticated, rescuerController.newPetAnnouncement);
router.delete('/announcement/:pet_id', isAuthenticated, rescuerController.deleteAPet)
router.put('/announcement/:pet_id', isAuthenticated, rescuerController.updateAPet)


// Followups
router.get('/followup', isAuthenticated, rescuerController.followUps)

module.exports = router;