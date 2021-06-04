import mongoose from 'mongoose';
import accommodationsSchema from './schema.js';
const { model } = mongoose;

export default model('accommodations', accommodationsSchema);
