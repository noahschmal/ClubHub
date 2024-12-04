import { Request, Response } from "express";
import Club from "../models/Club";
import User from "../models/User";
import { generateToken, clearToken } from "../utils/auth";
var bodyParser = require('body-parser');

const createClub = async (req: Request, res: Response) => {
  const { name, admin, description } = req.body;
  const clubNameTaken = await Club.findOne({ name });
  
  if (clubNameTaken) {
    res.status(401).send({ error: "Clubs name was already taken" });
    return;
  }
  let admins = [await User.findById(admin)];
  const club = await Club.create({
    name,
    admins,
    description,
  });

  if (club) {
    generateToken(res, club.id); 
    res.status(201).json({
      _id: club.id,
      name: club.name,
      admins: club.admins,
      description: club.description,
    });
  } else {
    res.status(400).json({ message: "An error occurred in creating the club" });
  }
};

const getClub = async (req: Request, res: Response) => {
  const clubId = req.body.id;
  console.log(clubId);
  const club = await Club.findById(clubId, "name description");
  console.log(club);
  if (!club) {
    res.status(400);
  }
  res.status(201).json(club);
};

const getClubs = async (req: Request, res: Response) => {
  const clubs = await Club.find({});
 
  if (!clubs) {
    res.status(400);
  }
  res.status(201).json(clubs);
}

const addAdminToClub = async (req: Request, res: Response) => {
	const userid = req.body.userid;
	const user = await User.findById(userid);
	const clubid = req.body.clubid;
	const club = await Club.findById(clubid);

	if (!user) {
		res.status(400).json( { message: "An error has occured while adding a user to the club\nUser Not Found" } );
		return;
	}
	if (!club) {
		res.status(400).json( { message: "An error has occured while adding a user to the club\nClub Not Found" } );
		return;
	}
	
	club.admins.push(userid);
	 
	res.status(201);
}


const addToClub = async (req: Request, res: Response) => {
	const userid = req.body.userid;
	const user = await User.findById(userid);
	const clubid = req.body.clubid;
	const club = await Club.findById(clubid);

	if (!user) {
		res.status(400).json( { message: "An error has occured while adding a user to the club\nUser Not Found" } );
		return;
	}
	if (!club) {
		res.status(400).json( { message: "An error has occured while adding a user to the club\nClub Not Found" } );
		return;
	}
	
	club.members.push(userid);
	 
	res.status(201);
}

export { createClub, getClub, getClubs, addAdminToClub, addToClub };





