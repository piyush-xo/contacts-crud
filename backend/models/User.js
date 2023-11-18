const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: String,
    phone: Number,
    email : String,
    about: String
});

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;