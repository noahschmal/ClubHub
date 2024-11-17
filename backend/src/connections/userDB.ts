import mongoose from "mongoose";

const connectUserDB = async () => {
	console.log(process.env.MONGODB_URI);
	try {
		const conn = await mongoose.connect(process.env.MONGODB_URI || "");
		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error: any) {
		console.error(`Error: ${error.message}`);
		process.exit(1);
	}
};

export default connectUserDB;
