const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const userSchema = new Schema({
    name: {type: String, required: true},
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
    country: {type: String, required: true},
    createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

module.exports = {User};