const { faker } = require("@faker-js/faker");

const login = (req, res) => {
  const { email, password } = req.body ?? {};

  if (!email) return res.status(401).send({ error: "Missing email " });
  if (!password) return res.status(401).send({ error: "Missing password" });

  if (email !== "a@a.dk" || password !== "a")
    return res.status(401).send({ error: "User does not exist" });

  const token = `${faker.datatype.number()}`;

  return res.status(200).send({ token });
};

module.exports = {
  login,
};
