import { describe, expect, test } from '@jest/globals'
import { productsApi } from './products.query'
import { store } from 'webshop/foundation/store'

describe('Space test suite', () => {
  it('tests /destinations endpoints', async () => {
    const response = await store.dispatch(productsApi.endpoints.getProducts.initiate())

    console.log(response)

    // const response = await request(app).get('/space/destinations')
    // expect(response.body).toEqual(['Mars', 'Moon', 'Earth', 'Mercury', 'Venus', 'Jupiter'])
    // expect(response.body).toHaveLength(6)
    // expect(response.statusCode).toBe(200)
    // // Testing a single element in the array
    // expect(response.body).toEqual(expect.arrayContaining(['Earth']))
  })
})
