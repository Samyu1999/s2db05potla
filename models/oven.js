const mongoose = require("mongoose")
const ovenSchema = mongoose.Schema({
    oven_color: String,
    oven_brand: { type: String, minLength: 4 },
    oven_price: { 
        type: Number,
        min: 30,
        max: 1000 
    }
})
module.exports = mongoose.model("oven", ovenSchema)  