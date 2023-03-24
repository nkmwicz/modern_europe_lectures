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
