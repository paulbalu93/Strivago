import mongoose from 'mongoose';
import accommodationSchema from './schema.js';
const { model } = mongoose;

export default model('accommodations', accomodationSchema);
