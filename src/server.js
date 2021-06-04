import express from 'express';
import cors from 'cors';
import accommodationsRouter from './services/products/index.js';

const server = express();
server.use(express.json());
server.use(cors());

server.get('/test', (req, res) => {
	res.status(200).send({ message: 'Test success!' });
});

server.use('/accommodation', accommodationsRouter);

export default server;
