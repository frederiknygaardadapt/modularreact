const { faker } = require("@faker-js/faker");
const isAuth = require("./isAuth");

const getUsers = (req, res) => {
  return res.send({
    users: [...new Array(100)].map(() => ({
      name: faker.name.firstName(),
      id: faker.datatype.uuid(),
      age: faker.datatype.number(),
    })),
  });
};

const addUser = async (req, res) => {
  try {
    await isAuth(req);
    return res.status(200).send("Here u go my friend");
  } catch (err) {
    return res.status(500).send("Unauthenticated");
  }
};

module.exports = {
  getUsers,
  addUser,
};
