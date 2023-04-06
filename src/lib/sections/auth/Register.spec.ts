import Register from "$lib/sections/auth/register.svelte";
import { fireEvent, render, screen } from "@testing-library/svelte";
import { describe, test } from "vitest";

describe('Pagina de Registro', () => {

  describe('Renderizado Formulario', () => {
    test('deberia renderizar el input de nombre', () => {
      render(Register);

      const nameInput = screen.getByLabelText('Name');

      expect(nameInput).toBeInTheDocument();
    });

    test('deberia renderizar el input de email', () => {
      render(Register);

      const emailInput = screen.getByLabelText('Email');

      expect(emailInput).toBeInTheDocument();
    });

    test('deberia renderizar el input de password', () => {
      render(Register);

      const passwordInput = screen.getByLabelText('Password');

      expect(passwordInput).toBeInTheDocument();
    });

    test('deberia renderizar el boton de submit', () => {
      render(Register);

      const submitButton = screen.getByRole('button');

      expect(submitButton).toBeInTheDocument();
    });
  });

  describe('Validacion de Formulario', () => {
    test('deberia mostrar un error si el nombre esta vacio', async () => {
      render(Register);

      const submitButton = screen.getByRole('button');

      await fireEvent.click(submitButton);

      const nameError = screen.getByText('Name is required');

      expect(nameError).toBeInTheDocument();
    });
  });


})