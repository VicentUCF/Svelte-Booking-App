import { db } from "$lib/db/db";
import { CourtId } from "$lib/features/court/domain/value_objects/CourtId";
import { CourtName } from "$lib/features/court/domain/value_objects/CourtsName";
import { CourtsSchedule } from "$lib/features/court/domain/value_objects/CourtsSchedule";
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

  try{
    new CourtName(name),
    new CourtId(id),
    new CourtsSchedule(schedule)
  }catch(e){
    return json({ error: "Invalid fields" }, { status: 400 });
  }

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