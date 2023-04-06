import { writable } from "svelte/store";
import type { Court } from "./Court";

export const courtsStorage = writable<Court[]>([]);