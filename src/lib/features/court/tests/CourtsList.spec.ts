// src/features/court/tests/CourtListWithService.test.ts

import { render, screen, waitFor } from '@testing-library/svelte';
import { vi } from 'vitest';
import { CourtService } from '../application/services/CourtService';
import { PostgreSQLCourtRepository } from '../infrastructure/repositories/PostgreSQLCourtRepository';
import CourtsList from '../ui/components/CourtsList.svelte';
import { faker } from '@faker-js/faker';
import type { Court } from '@prisma/client';
import { tick } from 'svelte';


const courts: Court[] = [
  { id: faker.datatype.uuid(), name: faker.datatype.string(5), schedule: {} },
  { id: faker.datatype.uuid(), name: faker.datatype.string(5), schedule: {} },
]

vi.mock('../../../../lib/features/court/application/services/CourtService', () => {
  return {
    CourtService: vi.fn().mockImplementation(() => {
      return {

        getAllCourts: () => {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve(courts)
            }, 500)
          })
        }
      }
    }),
  }
});

describe('CourtsList', () => {

  afterEach(() => {
    vi.clearAllMocks();
  })

  const repository = new PostgreSQLCourtRepository();
  const mockCourtService = new CourtService(repository);

  test('Expect loading to vi visble while loading courts', async () => {
    render(CourtsList, { courtService: mockCourtService });
    expect(await screen.findByText(/Loading/)).toBeVisible()
  })

  test('Expect loading to not be visible after loading courts', async () => {
    render(CourtsList, { courtService: mockCourtService });

    screen.debug()

    await nextTick()

    await waitFor(() => expect(screen.queryByText(/Loading/)).not.toBeInTheDocument());
  })

  test('Expect courts to be visible after loading courts', async () => {
    render(CourtsList, { courtService: mockCourtService });
    await waitFor(() => expect(screen.queryByText(/Loading/)).not.toBeInTheDocument());

    screen.debug()

    for (const court of courts) {
      expect(await screen.findByText(court.name)).toBeVisible()
    }
  })
})
