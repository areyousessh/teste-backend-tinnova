import { Router } from "express";
import { createCarsController, deleteCarsController, getCarsController, updateCarsController } from "../controllers/carsController";


const carsRouter = Router();
const createCars = new createCarsController()
const updateCars = new updateCarsController()
const deleteCars = new deleteCarsController()
const getCars = new getCarsController()

carsRouter.post('/veiculos', createCars.handle)
carsRouter.put('/veiculos/:id', updateCars.handle)
carsRouter.delete('/veiculos/:id', deleteCars.handle)
carsRouter.get('/veiculos', getCars.handle)


export {carsRouter}