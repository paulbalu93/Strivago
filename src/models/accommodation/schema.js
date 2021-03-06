import mongoose from 'mongoose';
const { Schema } = mongoose;

const accommodationsSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		maxGuests: {
			type: Number,
			required: true,
		},
		city: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

export default accommodationsSchema;
