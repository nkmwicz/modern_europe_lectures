import { atom, selector } from "recoil";

export const allSlides = atom({
  key: "allSlides",
  default: [],
});

export const slideIndexState = atom({
  key: "slideIndex",
  default: 0,
});

export const slideState = selector({
  key: "slide",
  get: ({ get }) => {
    const slides = get(allSlides);
    const slideIndex = get(slideIndexState);
    return slides[slideIndex];
  },
});

export const locationState = atom({
  key: "locationState",
  default: "Introduction",
});

export const mapCenterState = atom({
  key: "mapCenterState",
  default: [41.9, 12.5],
});

export const map1900State = atom({
  key: "map1900State",
  default: [],
});

export const map1914State = atom({
  key: "map1914State",
  default: [],
});

export const map1920State = atom({
  key: "map1920State",
  default: [],
});
