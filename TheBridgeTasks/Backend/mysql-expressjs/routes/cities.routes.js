import express from "express";
import { getCities, addCity, updateCity, deleteCity } from "../controllers/cities.controller.js";

const citiesRouter = express.Router();

citiesRouter.get("/", getCities);

citiesRouter.post("/", addCity);

citiesRouter.put("/:id", updateCity);

citiesRouter.delete("/:id", deleteCity);

export { citiesRouter };