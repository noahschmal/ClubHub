import express from "express";
import {
	createClub,
	getClub,
	getClubs,
} from "../controllers/clubController";

const router = express.Router();

router.post("/createClub", createClub);
router.post("/:id", getClub);
router.post("/getClubs", getClubs);

export default router;
