const express = require("express");
const bodyParser = require("body-parser");
const { faker } = require("@faker-js/faker");

const user = require("./users");

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  return res.send("Recieved!");
});

/** Products */
app.get("/products", (req, res) => {
  const { query } = req;

  if (!query.id) res.status(500).send("Id not defined");

  res.status(200).send([
    {
      id: query.id,
      productName: faker.commerce.productName(),
    },
  ]);

  return res.send(query.id);
});

/** User */
app.get("/users", user.getUsers);
app.post("/users", user.addUser);

app.listen(8080);

module.exports = {};
