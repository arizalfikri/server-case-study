const express = require("express");
const { connect } = require("./config");
const router = require("./routes/index");
const app = express();
const port = process.env.PORT || 4000;
const cors = require("cors");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(router);

connect().then(() => {
  console.log("berhasil connect");
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
});
