// src/features/court/tests/CourtListWithService.test.ts

import { render, screen } from '@testing-library/svelte';
import { tick } from 'svelte';
import { CourtService } from '../application/services/CourtService';
import { PostgreSQLCourtRepository } from '../infrastructure/repositories/PostgreSQLCourtRepository';
import CourtsList from '../ui/components/CourtsList.svelte';
import { MockCourtService } from './MockCourtService';

// Mock del servicio CourtService

test('renders a list of courts using CourtService and handles user interaction', async () => {
  const mockCourtService = new MockCourtService();
  const courts = await mockCourtService.getAllCourts();
  const { findByText } = render(CourtsList, {
    props: {
      courtService: mockCourtService,
    }
  });

  // Utiliza `tick` para esperar a que se completen las actualizaciones pendientes de Svelte
  await tick();

  const court1Element = await findByText('Court 1');
  expect(court1Element).toBeInTheDocument();

  // Realiza las pruebas como lo harías normalmente
  // ...
});