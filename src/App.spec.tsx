import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'
import RootProvider from './RootProvider'

describe('App test', () => {
  test('should show title all the time', () => {
    render(
      <RootProvider>
        <App />
      </RootProvider>,
    )

    expect(screen.getByText(/I'm Dizzy!/i)).toBeDefined()
  })
})
