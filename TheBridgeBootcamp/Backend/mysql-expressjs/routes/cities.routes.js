import express from "express";
import { getAllCities, addCity, updateCity, deleteCity } from "../controllers/cities.controller.js";

const citiesRouter = express.Router();

citiesRouter.get("/", getAllCities);
citiesRouter.post("/", addCity);
citiesRouter.put("/:id", updateCity);
citiesRouter.delete("/:id", deleteCity);

export { citiesRouter };