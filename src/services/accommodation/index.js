import express from 'express';
import accommodationModel from '../../models/accommodation/index.js'

const accommodationRouter = Router();

accommodationRouter.get("/", async (req, res)=> {

res.status(200).send({ accommodations: []})
})
accommodationRouter.get("/", async (req, res)=> { 

}

accommodationRouter.get("/:id", async (req, res)=> {

}

accommodationRouter.post("/", async (req, res)=> {

}

accommodationRouter.put("/:id", async (req, res)=> {

}

accommodationRouter.delete("/", async (req, res)=> {

}



export default accommodationRouter;
