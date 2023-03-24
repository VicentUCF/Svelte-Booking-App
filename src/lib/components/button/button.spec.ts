import '@testing-library/jest-dom'

import {render, fireEvent, screen} from '@testing-library/svelte'
import Button from './button.svelte'


test('shows proper heading when rendered', () => {
  render(Button, {name: 'World'})
  const heading = screen.getByText('Hello World!')
  expect(heading).toBeInTheDocument()
})

test('changes button text on click', async () => {
  render(Button, {name: 'World'})
  const button = screen.getByRole('button')
  await fireEvent.click(button)
  expect(button).toHaveTextContent('Button Clicked')
})
