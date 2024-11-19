import { Request, Response } from "express";
import Event from "../models/Event";
import { generateToken, clearToken } from "../utils/auth";
var bodyParser = require('body-parser');

const createEvent = async (req: Request, res: Response) => {
  const { name, clubId, description, time } = req.body;
  const eventNameTaken = await Event.findOne({ name });
  
  if (eventNameTaken) {
    res.status(400).json({ message: "Events name was already taken" });
  }
  const event = await Event.create({
    name,
    clubId,
    description,
    time,
  });

  if (event) {
    generateToken(res, event.id); 
    res.status(201).json({
      _id: event.id,
      name: event.name,
      clubId: event.clubId,
      description: event.description,
      time: event.time,
    });
  } else {
    res.status(400).json({ message: "An error occurred in creating the user" });
  }
};

const getEvent = async (req: Request, res: Response) => {
  const eventId = req.body.id;
  console.log(eventId);
  const event = await Event.findById(eventId, "name description");
  console.log(event);
  if (!event) {
    res.status(400);
  }

  res.status(201).json(event);
};

const getEvents = async (req: Request, res: Response) => {
  const events = await Event.find();
 
  if (!events) {
    res.status(400);
  }
 res.status(201).json(events);
}


export { createEvent, getEvent, getEvents};
