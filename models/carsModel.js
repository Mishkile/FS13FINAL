const mongoose = require("mongoose")

const carsModel = new mongoose.Schema({
    name: String,
    price: Number,
    year: Number
},
    { versionKey: false })

const CarsModel = mongoose.model("cars", carsModel)

module.exports = CarsModel
