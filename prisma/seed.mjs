import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();
console.log(process.env.DATABASE_URL);


async function main() {
  const users = [];
  const courts = [];
  const reservations = [];
  const matches = [];

  // Crear usuarios
  for (let i = 0; i < 10; i++) {
    const user = {
      id: faker.datatype.uuid(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      name: faker.name.fullName(),
    };
    users.push(user);
  }

  await prisma.user.createMany({ data: users });

  // Crear pistas
  for (let i = 0; i < 5; i++) {
    const court = {
      id: faker.datatype.uuid(),
      name: `Pista ${i + 1}`,
      schedule: JSON.stringify({}),
    };
    courts.push(court);
  }

  await prisma.court.createMany({ data: courts });

  // Crear reservas
  for (let i = 0; i < 20; i++) {
    const reservation = {
      id: faker.datatype.uuid(),
      courtId: courts[faker.datatype.number({ min: 0, max: courts.length - 1 })].id,
      userId: users[faker.datatype.number({ min: 0, max: users.length - 1 })].id,
      startAt: faker.date.future(),
      endAt: faker.date.future(),
    };
    reservations.push(reservation);
  }

  await prisma.reservation.createMany({ data: reservations });

  // Crear partidas
  for (let i = 0; i < 10; i++) {
    const match = {
      id: faker.datatype.uuid(),
      courtId: courts[faker.datatype.number({ min: 0, max: courts.length - 1 })].id,
      userId: users[faker.datatype.number({ min: 0, max: users.length - 1 })].id,
      startAt: faker.date.future(),
      endAt: faker.date.future(),
      players: JSON.stringify({
        player1: faker.name.fullName(),
        player2: faker.name.fullName(),
        player3: faker.name.fullName(),
        player4: faker.name.fullName(),
      }),
    };
    matches.push(match);
  }

  await prisma.match.createMany({ data: matches });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
