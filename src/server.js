import express from 'express';
import cors from 'cors';
import accommodationRouter from './services/products/index.js';

const server = express();
server.use(express.json());
server.use(cors());

server.get('/test', (req, res) => {
	res.status(200).send({ message: 'Test success!' });
});

server.use('/accommodation', accommodationRouter);

export default server;
