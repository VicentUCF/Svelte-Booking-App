import type { Court } from "$lib/modules/Courts/domain/Court";
import { writable } from "svelte/store";

export const login = writable(false, () => {

  const user = localStorage.getItem("login");
  if (user) {
    login.set(true);
  }

});

export const courtsStorage = writable<Court[]>([]);