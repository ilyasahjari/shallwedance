const express = require('express')
const EventsController = require('../controllers/EventsController')
const router = express.Router()
const EventController = require('../controllers/EventsController')

router.get("/allEvents",EventsController.allEvents)
router.get("/oneEvent",EventController.getOneEvent)
router.post("/addEvent",EventsController.addEvent)
router.post("/updateEvent",EventsController.updateEvent)