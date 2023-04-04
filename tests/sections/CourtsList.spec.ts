import type { Court } from "$lib/modules/Courts/domain/Court";
import { LocalStorageCourseRepository } from "$lib/modules/Courts/infrastructure/LocalStorageCourtRepository";
import CourtsList from "$lib/sections/courts/CourtsList.svelte";
import { render, screen } from "@testing-library/svelte";
import { describe } from "vitest";

const court: Court = {
  id: "1",
  name: "Court 1",
  schedule: "morning",
}


//test for courts List
describe("CourtsList", () => {
  it("should render courts list", () => {

    const localCourtRepository = LocalStorageCourseRepository();
    localCourtRepository.save(court);
    render(CourtsList, {
      props: {
        courtRepository: localCourtRepository,
      }
    });

    expect(screen.getByText("Court 1")).toBeInTheDocument();



  });
});