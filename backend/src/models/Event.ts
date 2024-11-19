import mongoose, { Document, Schema } from "mongoose";
import bcrypt from "bcryptjs";



export interface IEvent extends Document {
	_id: string;
	name: string;
	clubId: string;
	description: string;
	time: Date;
}

const eventSchema = new Schema<IEvent>({
	name: {
		type: String,
		required: true,
		unique: true,
	},
	clubId: {
		type: String,
		required: true,
	},
	description: {
		type: String,

		required: true,
	},
	time: {
		type: Date,
		required:true,
	}
});

const Event = mongoose.model("Event", eventSchema);




export default Event;
