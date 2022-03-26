const express = require("express");
const cors = require("cors");
const events = require("events");
const PORT = 5000;

const emitter = new events.EventEmitter();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/get-messages/1", (req, res) => {
  emitter.once("newMessage1", (message) => {
    res.json(message);
  });
});

app.post("/new-messages/1", (req, res) => {
  const message = req.body;
  emitter.emit("newMessage2", message);
  res.status(200);
});

app.get("/get-messages/2", (req, res) => {
  emitter.once("newMessage2", (message) => {
    res.json(message);
  });
});

app.post("/new-messages/2", (req, res) => {
  const message = req.body;
  emitter.emit("newMessage1", message);
  res.status(200);
});

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
