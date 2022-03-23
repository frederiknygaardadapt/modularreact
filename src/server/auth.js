const { faker } = require('@faker-js/faker')

const login = (req, res) => {
  const email = req.body.email
  const password = req.body.password

  if (!email) return res.status(401).send({ message: 'Missing email ' })
  if (!password) return res.status(401).send({ message: 'Missing password' })

  if (email !== 'a@a.dk' || password !== 'a')
    return res.status(401).send({ message: 'User does not exist' })

  const token = `${faker.datatype.number()}`

  return res.status(200).send({ token })
}

module.exports = {
  login,
}
