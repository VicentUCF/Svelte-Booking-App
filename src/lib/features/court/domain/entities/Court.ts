import type { CourtName } from "../value_objects/CourtsName";
import type { CourtsSchedule } from "../value_objects/CourtsSchedule";

export interface Court {
  id: string;
  name: CourtName;
  schedule: CourtsSchedule;
}