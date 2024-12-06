import express from "express";
import {
	createClub,
	getClub,
	getClubs,
	addAdminToClub,
	addToClub,
	removeFromClub,
	clubByUser,
} from "../controllers/clubController";

const router = express.Router();

router.post("/createClub", createClub);
router.post("/getClub", getClub);
router.post("/getClubs", getClubs);
router.post("/addToClub", addToClub);
router.post("/removeFromClub", removeFromClub);
router.post("/addAdminToClub", addAdminToClub);
router.post("/clubByUser", clubByUser);

export default router;
