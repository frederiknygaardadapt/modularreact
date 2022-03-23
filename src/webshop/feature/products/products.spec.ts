import { describe, expect } from '@jest/globals'
import { productsApi } from './products.query'
import { store } from 'webshop/foundation/store'

describe('Product api endpoints', () => {
  it('tests /products endpoint', async () => {
    const response = await store.dispatch(productsApi.endpoints.getProducts.initiate())
    expect(response.status).toBe('fulfilled')
    expect(response.isError).toBe(false);
  })

  it('tests /product/:slug endpoint', async () => {
    const response = await store.dispatch(productsApi.endpoints.getProductBySlug.initiate('test-slug'))
    expect(response.status).toBe('rejected')
    expect(response.isError).toBe(true);
  })
})
