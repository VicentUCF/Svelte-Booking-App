import { db } from "$lib/db/db";
import type { User } from "@prisma/client";
import { json, type RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async () => {
  await db.$connect();
  const courts = await db.user.findMany();
  await db.$disconnect();

  return json(courts);
}

export const POST: RequestHandler = async ({ params }) => {
  await db.$connect();
  const { id, email, password, authToken, name } = params as User;

  if (!name || !email || !password || !id || !authToken) return json({ error: "Missing required fields" }, { status: 400 });

  await db.user.upsert({
    where: { id: id },
    update: params,
    create: {
      id: id,
      name: name,
      email: email,
      password: password,
      authToken: authToken

    }
  });

  await db.$disconnect();

  return json({}, { status: 201 });
};

export const DELETE: RequestHandler = async ({ params }) => {
  await db.$connect();
  const { id } = params;

  if (!id) return json({ error: "Missing required fields" }, { status: 400 });

  await db.user.delete({
    where: { id: id }
  });
  await db.$disconnect();

  return json({}, { status: 204 });
};

