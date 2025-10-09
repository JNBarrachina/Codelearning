import { CityModel } from "../models/city.model.js";

export const getAllCities = async (req, res) => {
    const cities = await CityModel.findAll();
    res.send(cities);
}

export const addCity = async (req, res) => {
    let {name, country} = req.body;
    const newCity = await CityModel.newCity(name, country);
    res.send(newCity);
}

export const updateCity = async (req, res) => {
    const movieId = parseInt(req.params.id);
    const {name, country} = req.body;

    const updateCity = await CityModel.updateCity(movieId, name, country);
    res.send(updateCity);
}

export const deleteCity = async (req, res) => {
    let removedCity = req.params.id;

    const deleteCity = await CityModel.deleteCity(removedCity);
    res.send(deleteCity);
}

