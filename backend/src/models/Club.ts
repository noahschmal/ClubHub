import mongoose, { Document, Schema } from "mongoose";
import bcrypt from "bcryptjs";

export interface IClub extends Document {
	_id: string;
	name: string;
	members: string[];
	admins: string[];
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
		type: String[],
		required: false,
	},
	admins: {
		type: String[],
		required: true,
	},
	description: {
		type: String[],
		required: true,
	}
});

const User = mongoose.model("User", userSchema);

export default User;


