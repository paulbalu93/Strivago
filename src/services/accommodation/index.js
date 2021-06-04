import express from 'express';
import accommodationModel from '../../models/accommodation/index.js';

const accommodationsRouter = Router();

accommodationsRouter.get('/', async (req, res) => {
	const accommodation = await accommodationModel.find({});
	res.status(200).send({ accommodations: [] });
});

accommodationsRouter.get('/:id', async (req, res) => {});

accommodationsRouter.post('/', async (req, res) => {
	const { name, description, maxGuests, city } = req.body;

	if (!description || !name || !maxGuests || !city) throw new Error('Invalid data');

	const accommodations = new accomodationModel({ description, name, maxGuests, city });
	await product.save();

	res.status(201).send(accommodations);
});

accommodationsRouter.put('/:id', async (req, res) => {});

accommodationsRouter.delete('/', async (req, res) => {
	try {
		await accomodationModal.findByIdAndDelete(req.params.id);
		res.status(204).send();
	} catch (error) {
		next(error);
	}
});

export default accommodationsRouter;
