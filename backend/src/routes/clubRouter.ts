import express from "express";
import {
	createClub,
	getClub,
	getClubs,
	addAdminToClub,
	addToClub,
} from "../controllers/clubController";

const router = express.Router();

router.post("/createClub", createClub);
router.post("/getClub", getClub);
router.post("/getClubs", getClubs);
router.post("/addToClub", addToClub);
router.post("/addAdminToClub", addAdminToClub);

export default router;
