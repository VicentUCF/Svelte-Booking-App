import { db } from "$lib/db/db";
import { json, type RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async () => {
  await db.$connect();
  const courts = await db.user.findMany();
  await db.$disconnect();

  return json(courts);
}

export const POST: RequestHandler = async (request) => {
  await db.$connect();
  const court = await db.user.upsert({
    where: {
      id: '1'
    },
    update: {
      name: 'paco'
    },
    create: {
      id: '',
      name: 'paco',
      email: '',
      password: '',
    }
  });
  await db.$disconnect();

  return json(court);

};