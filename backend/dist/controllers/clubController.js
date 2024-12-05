"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClubs = exports.getClub = exports.createClub = void 0;
const Club_1 = __importDefault(require("../models/Club"));
const User_1 = __importDefault(require("../models/User"));
const auth_1 = require("../utils/auth");
const createClub = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, admin, description } = req.body;
    const clubNameTaken = yield User_1.default.findOne({ name });
    if (clubNameTaken) {
        res.status(400).json({ message: "Clubs name was already taken" });
    }
    let admins = [yield User_1.default.findById(admin)];
    const club = yield Club_1.default.create({
        name,
        admins,
        description,
    });
    if (club) {
        (0, auth_1.generateToken)(res, club.id);
        res.status(201).json({
            _id: club.id,
            name: club.name,
            admins: club.admins,
            description: club.description,
        });
    }
    else {
        res.status(400).json({ message: "An error occurred in creating the user" });
    }
});
exports.createClub = createClub;
const getClub = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const clubId = (_a = req.user) === null || _a === void 0 ? void 0 : _a._id;
    const club = yield Club_1.default.findById(clubId, "name email");
    if (!club) {
        res.status(400);
    }
    res.status(200).json(club);
});
exports.getClub = getClub;
const getClubs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const clubs = yield Club_1.default.find();
    if (!clubs) {
        res.status(400);
    }
    res.status(200).json(clubs);
});
exports.getClubs = getClubs;
