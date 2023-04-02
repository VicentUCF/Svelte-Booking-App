import { fireEvent, render, screen } from '@testing-library/svelte'
import { expect, test } from 'vitest'
import ToggleErrorButton from './toggle-error-button.svelte'

test('Will render the toggle error button', async () => {
  render(ToggleErrorButton)
  const toggleButton = screen.getByRole('button', { name: /Toggle/})
  expect(toggleButton).toBeInTheDocument()
})


test('On click will show erros', async () => {
  render(ToggleErrorButton)
  const toggleButton = screen.getByRole('button', { name: /Toggle/})
  await fireEvent.click(toggleButton)
  const errors = screen.getAllByText(/Error/)
  expect(errors).toHaveLength(3)
  for (const error of errors) {
    expect(error).toBeInTheDocument()
  }
})