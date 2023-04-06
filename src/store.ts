import type { Court } from "$lib/features/court/domain/entities/Court";
import { writable } from "svelte/store";

export const login = writable(false, () => {

  const user = localStorage.getItem("login");
  if (user) {
    login.set(true);
  }

});

export const courtsStorage = writable<Court[]>([]);

export const storage = writable();