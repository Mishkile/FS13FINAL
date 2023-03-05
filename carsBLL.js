const express = require('express');
const router = express.Router();

const bl = require('../BLL/carsBLL');

router.get('/', async (req, res) => {
    const cars = await bl.getAllCars();
    res.json(cars);
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const car = await bl.getCar(id);
    res.json(car);
});

router.post('/', async (req, res) => {
    const obj = req.body;
    const msg = await bl.addCar(obj);
    res.json(msg);
});

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const obj = req.body;
    const msg = await bl.updateCar(id, obj);
    res.json(msg);
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const msg = await bl.deleteCar(id);
    res.json(msg);
});

module.exports = router;

