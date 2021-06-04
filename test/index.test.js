import dotenv from 'dotenv';
// import supertest from "supertest"
// import server from "../src/server"
// import mongoose from "mongoose"
// import ProductModel from "../src/models/products/index.js"
dotenv.config();

// const request = supertest(server)

describe('Stage I - Testing the test env', () => {
	it('should test that true is true', () => {
		expect(true).toBe(true);
	});

	it('should test that false is not true', () => {
		expect(false).not.toBe(true);
	});

	it('should test that false is falsy', () => {
		expect(false).toBeFalsy();
	});

	it('should expect that the test key is 123', () => {
		console.log(process.env.TEST_KEY);
		expect(process.env.TEST_KEY).toBeDefined();
		expect(process.env.TEST_KEY).toBe('123');
	});
});

describe('Checking application main endpoints', () => {
	it('should check that the /products endpoint is working', async () => {
		const response = await request.get('/accommodation');
		expect(response.status).toBe(200);
		expect(response.body.products).toBeDefined();
		expect(response.body.products.length).toBe(0);
	});
});
