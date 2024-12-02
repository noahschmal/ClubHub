import express from "express";
import {
	createEvent,
	getEvent,
	getEvents,
} from "../controllers/clubController";

const router = express.Router();

router.post("/createEvent", createEvent);
router.post("/id", getEvent);
router.post("/getEvents", getEvents);

export default router;
