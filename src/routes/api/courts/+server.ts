import { db } from "$lib/db/db";
import { isCourtIdValid } from "$lib/modules/Courts/domain/CourtId";
import { isCourtNameValid } from "$lib/modules/Courts/domain/CourtName";
import { isCourtScheduleValid } from "$lib/modules/Courts/domain/CourtSchedule";
import { json, type RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async () => {
  await db.$connect();
  const courts = await db.court.findMany();
  await db.$disconnect();

  return json(courts);
}

export const POST: RequestHandler = async ({ request }) => {
  await db.$connect();

  const { name, id, schedule } = await request.json()


  if (!name || !id || !schedule) return json({ error: "Missing required fields" }, { status: 400 });

  if (!isCourtIdValid(id)) return json({ error: "Invalid id" }, { status: 400 });
  if (!isCourtNameValid(name)) return json({ error: "Invalid name" }, { status: 400 });
  if (!isCourtScheduleValid(schedule)) return json({ error: "Invalid schedule" }, { status: 400 });

  await db.court.upsert({
    where: { id: id },
    update: {
      name,
      schedule,
      id
    },
    create: {
      id: id,
      name: name,
      schedule: schedule
    }
  });
  await db.$disconnect();

  return json({}, { status: 201 });
};

export const DELETE: RequestHandler = async ({ params }) => {
  await db.$connect();
  const { id } = params;

  if (!id) return json({ error: "Missing required fields" }, { status: 400 });

  await db.court.delete({
    where: { id: id }
  });
  await db.$disconnect();

  return json({}, { status: 204 });
};