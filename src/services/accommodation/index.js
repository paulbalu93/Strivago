import express from 'express';
import accommodationModel from '../../models/accommodation/index.js';

const accommodationsRouter = Router();

accommodationsRouter.get('/', async (req, res) => {
	const accommodation = await accommodationModel.find({});
	res.status(200).send({ accommodations: [] });
});
accommodationsRouter.get('/', async (req, res) => {});

accommodationsRouter.get('/:id', async (req, res) => {});

accommodationsRouter.post('/', async (req, res) => {
	const { name, description, maxGuests, city } = req.body;

	if (!description || !name || !maxGuests || !city) throw new Error('Invalid data');

	const accommodation = new ProductModel({ description, price });
	await product.save();

	res.status(201).send(product);
});

accommodationsRouter.put('/:id', async (req, res) => {});

accommodationsRouter.delete('/', async (req, res) => {});

export default accommodationsRouter;
