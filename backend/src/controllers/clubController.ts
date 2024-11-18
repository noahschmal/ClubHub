import { Request, Response } from "express";
import Club from "../models/Club";
import User from "../models/User";
import { generateToken, clearToken } from "../utils/auth";

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
    res.status(400).json({ message: "An error occurred in creating the clubs" });
  }
};

const getClub = async (req: Request, res: Response) => {
<<<<<<< HEAD
  const clubId = req.params.id;
=======
  const clubId = $ club (req.params.id);
>>>>>>> dfeb10b (Debugging)
  const club = await Club.findById(clubId, "name description");

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
