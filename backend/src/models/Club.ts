import mongoose, { Document, Schema } from "mongoose";
import bcrypt from "bcryptjs";
import User from "./User";

export interface IClub extends Document {
	_id: string;
	name: string;
	members: typeof User[];
	admins: typeof User[];
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
		type: typeof User[],
		required: false,
	},
	admins: {
		type: typeof User[],
		required: true,
	},
	description: {
		type: String,
		required: true,
	}
});

const Club = mongoose.model("Club", userSchema);

const MakeClub = async (req: Request, res: Response) => {
	name,
    	adminId,
    	description,
 
}


export default Club;


