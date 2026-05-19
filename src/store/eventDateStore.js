import { create } from "zustand";

const targetDate = new Date("Jul 11, 2026 16:00:00").getTime();

const useEventDateStore = create((set, get) => {
  const now = Date.now();
  const isEventDay =
    now >= targetDate && now < targetDate + 24 * 60 * 60 * 1000;
  const isPastEvent = now >= targetDate + 24 * 60 * 60 * 1000;
  return {
    targetDate,
    now,
    isEventDay,
    isPastEvent,
    updateNow: () =>
      set({
        now: Date.now(),
        isEventDay:
          Date.now() >= targetDate &&
          Date.now() < targetDate + 24 * 60 * 60 * 1000,
        isPastEvent: Date.now() >= targetDate + 24 * 60 * 60 * 1000,
      }),
  };
});

export default useEventDateStore;
