const express = require('express');

const router = express.Router();

const bl = require('../business-logic/bl');


// GET ALL
router.get('/', async (req, res) => {
    try {
        const data = await bl.getAllCars();
        res.json(data);
    } catch (e) {
        res.status(500).send(e.message);
    }
});

// GET ONE BY ID
router.get('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const data = bl.getCar(id);
        res.json(data);
    } catch (e) {
        res.status(500).send(e.message);
    }
});

// POST - add one
router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newData = await bl.addCar(data);
        res.status(201).json(newData);
    } catch (e) {
        res.status(500).send(e.message);
    }
});


// PUT - update one
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const updatedData = await bl.updateCar(id, data);
        res.json(updatedData);
    } catch (e) {
        res.status(500).send(e.message);
    }
});

// DELETE - delete one
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await bl.deleteCar(id);
        res.json({ message: 'Deleted' });
    } catch (e) {
        res.status(500).send(e.message);
    }
});

module.exports = router;



