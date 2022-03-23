const express = require('express')
const bodyParser = require('body-parser')
const { faker } = require('@faker-js/faker')

const user = require('./users')
const auth = require('./auth')

const app = express()

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use(express.json())

app.get('/', (req, res) => {
  return res.send('Recieved!')
})

const createProduct = (index) => {
  const productName = faker.commerce.productName()
  const brands = ['Adidas', 'Nike', 'Puma', 'Reebok', 'Vans']

  return {
    id: faker.datatype.uuid(),
    slug: faker.helpers.slugify(productName).toLowerCase(),
    brand: faker.random.arrayElement(brands),
    name: productName,
    price: faker.commerce.price(),
    description: faker.commerce.productAdjective(),
    image: `${faker.image.fashion()}?${index}`,
    category: faker.commerce.productMaterial(),
  }
}

const products = [...new Array(30)].map((_, index) => {
  faker.seed(index)
  return createProduct(index)
})

/** Products */
app.get('/api/products', (req, res) => {
  res.send({ products })
})

app.get('/api/products/:slug', (req, res) => {
  const product = products.find(
    (product) => product.slug.toLowerCase() === req.params.slug.toLowerCase()
  )
  console.log(product)
  res.send({ product })
})

/** User */
app.get('/users', user.getUsers)
app.post('/users', user.addUser)

app.post('/api/login', auth.login)

app.listen(8080)

module.exports = {}
