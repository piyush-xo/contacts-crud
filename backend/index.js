const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const UserModel = require("./models/User");

const connectDB = async () => {
  try {
    console.log("connecting");
    const conn = await mongoose.connect(`mongodb://0.0.0.0:27017/contacts`, {
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/users", (req, res) => {
  UserModel.find()
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.post("/create", (req, res) => {
  console.log(req.body);
  UserModel.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.post("/update", (req, res) => {
  console.log(req.body);
  UserModel.findByIdAndUpdate(req.body.id, req.body.user)
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.get("/delete/:id", (req, res) => {
  console.log(req.params);
  UserModel.findByIdAndDelete(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.listen(3000, () => console.log("server running at 3000"));
