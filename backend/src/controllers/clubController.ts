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
  let admins_exist = await User.findById(admin);
  if (!admins_exist) {
  	res.status(401).send({ error: "Creator was an unknown user"});
	return;
  }
  let admins = admins_exist.name;
  let members = admins;
  const club = await Club.create({
    name,
    members,
    admins,
    description,
  });

  if (club) {
    generateToken(res, club.id); 
    res.status(201).json({
      _id: club.id,
      name: club.name,
      admins: club.admins,
      members: club.admins,
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
	if (!user) {
		res.status(400).json( { message: "An error has occured while adding a user to the club\nUser Not Found" } );
		return;
	}
	const clubName = req.body.clubName;
	const club = await Club.find({name: clubName});
	if (!club) {
		res.status(400).json( { message: "An error has occured while adding a user to the club\nClub Not Found" } );
		return;
	}
	if (club[0].members.includes(user.name)) 
		res.status(400).json( { message: "Already member of club"} );
	club[0].members.push(user.name);
	await club[0].save();
	res.status(201);
	return;
}


const addToClub = async (req: Request, res: Response) => {
	const userid = req.body.userId;
	const user = await User.findById(userid);
	const clubName = req.body.clubName;
	const club = await Club.find( {name: clubName} );
	if (!user) {
		res.status(400).json( { message: "An error has occured while adding a user to the club\nUser Not Found" } );
		return;
	}
	if (!club) {
		res.status(400).json( { message: "An error has occured while adding a user to the club\nClub Not Found" } );
		return;
	}
	if (club[0].members.includes(user.name)) 
		res.status(400).json( { message: "Already member of club"} );
	club[0].members.push(user.name);
	await club[0].save();
	res.status(201);
	return;
}

const clubByUser = async (req: Request, res: Response) => {	
	const userid = req.body.userId;
	const user = await User.findById(userid);
	if (!user) {
		res.status(401).json( { message: "An error has occured while finding the user"} );
		return;
	}
	const username = User.name;
	const clubs = await Club.find( {users: username} ); 
	if (!clubs) {
		res.status(401).json( {message: "No clubs found with this user"} );
		return;
	}

	res.status(201).json(clubs);
	return;
}

export { createClub, getClub, getClubs, addAdminToClub, addToClub, clubByUser };





