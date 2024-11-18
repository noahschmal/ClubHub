import mongoose, { Document, Schema } from "mongoose";
import bcrypt from "bcryptjs";


export interface IClub extends Document {
	_id: string;
	name: string;
	members: Array< string >;
	admins: Array< string >;
	description: string;

}

const clubSchema = new Schema<IClub>({
	name: {
		type: String,
		required: true,
		unique: true,
	},
	members: [{
		type: String,
		required: false,
	}],
	admins: [{
		type: String,
		required: true,
	}],
	description: {
		type: String,
		required: true,
	}
});

const Club = mongoose.model("Club", clubSchema);




export default Club;


