import mongoose, { Document, Schema } from "mongoose";
import bcrypt from "bcryptjs";
import User from "User";

export interface IClub extends Document {
	_id: string;
	name: string;
	members: User[];
	admins: User[];
	description: string;

}

const clubSchema = new Schema<IClub>({
	_id: {
		type: String,
		required: false,
	},
	name: {
		type: String,
		required: true,
		unique: true,
	},
	members: {
		type: User[],
		required: false,
	},
	admins: {
		type: User[],
		required: true,
	},
	description: {
		type: String[],
		required: true,
	}
});

const Club = mongoose.model("Club", userSchema);

export default Club;


