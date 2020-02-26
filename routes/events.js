const express = require('express');
const router = express.Router();

// Routes related to event

router.get('/', getAllEvents);
router.post('/', addEvent);
router.delete('/', deleteEvent);
router.get('/actors/:id', getByActor);


module.exports = router;