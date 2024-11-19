import { Request, Response } from "express";
import Club from "../models/Club";
import User from "../models/User";
import { generateToken, clearToken } from "../utils/auth";
var bodyParser = require('body-parser');

const createClub = async (req: Request, res: Response) => {
  const { name, admin, description } = req.body;
  const clubNameTaken = await User.findOne({ name });
  
  if (clubNameTaken) {
    res.status(400).json({ message: "Clubs name was already taken" });
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
    res.status(400).json({ message: "An error occurred in creating the user" });
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

  res.status(200).json(club);
};

const getClubs = async (req: Request, res: Response) => {
  const clubs = await Club.find();
 
  if (!clubs) {
    res.status(400);
  }
 res.status(200).json(clubs);
}


export { createClub, getClub, getClubs};
