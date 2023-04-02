import { screen } from "@testing-library/dom";
import { fireEvent, render } from "@testing-library/svelte";
import { test } from "vitest";
import Header from "./header.svelte";

test('Will rendere the header', async () => {
  render(Header, { links: [{ text: 'Home', href: '/', active: false }] });
  const link = screen.getByRole('link', { name: 'Home' });
  expect(link).toBeInTheDocument();
})

test('On click on the link will change the url', async () => {
  render(Header, { links: [{ text: 'Home', href: '/', active: false }] });
  const link = screen.getByRole('link', { name: 'Home' });
  await fireEvent.click(link);
  expect(link).toHaveAttribute('href', '/');
})

test('On change url will change the active link', async () => {
  render(Header, { links: [{ text: 'Home', href: '/', active: true }] }, { container: document.body });
  const link = screen.getByRole('link', { name: 'Home' });
  await fireEvent.click(link);
  expect(link).toHaveClass('active');
})