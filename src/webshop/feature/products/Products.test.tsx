import { test } from '@jest/globals'
import { ProductsView } from './ProductsView'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from 'webshop/foundation/store'
import React from 'react'

test('renders learn react link', async () => {
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <Provider store={store}>{children}</Provider>
  )

  render(<ProductsView />, { wrapper })
  await screen.findByText(/CustomProduct/i)
})
