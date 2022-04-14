const mongoose = require("mongoose")
const ovenSchema = mongoose.Schema({
oven_Color: String,
oven_Brand: String,
oven_Type: String
})
module.exports = mongoose.model("oven",ovenSchema)