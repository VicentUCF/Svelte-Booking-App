import { fireEvent, render, screen } from "@testing-library/svelte"
import AnimateComponent from "./animate-component.svelte"

test('Will render animate component', async () => {
  render(AnimateComponent)
  const checkbox = screen.getByRole('checkbox')
  expect(checkbox).toBeInTheDocument()
  await fireEvent.click(checkbox)
  const title = screen.getByText('Hola mundo')
  expect(title).toBeInTheDocument()
})