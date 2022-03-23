import { test } from '@jest/globals'
import { Products } from './Products'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from 'webshop/foundation/store'
import React from 'react'

test('renders learn react link', async () => {
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <Provider store={store}>{children}</Provider>
  )

  render(<Products />, { wrapper })
  await screen.findByText(/CustomProduct/i)
})
