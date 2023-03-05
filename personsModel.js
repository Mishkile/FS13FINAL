const mongoose = require("mongoose")

const personsModel = new mongoose.Schema({
    name: String,
    age: Number,
    address: { city: String, street: String }
},
    { versionKey: false })

const PersonsModel = mongoose.model("persons", personsModel)

module.exports = PersonsModel
