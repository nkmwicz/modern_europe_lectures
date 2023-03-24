import React from "react";
import { Arrows } from "@nkmwicz/reactpresentation";
import { useRecoilState, useRecoilValue } from "recoil";
import { allSlides, slideIndexState } from "./globalState";

export function TheArrows() {
  const [slideIndex, setSlideIndex] = useRecoilState(slideIndexState);
  const slides = useRecoilValue(allSlides);

  function nextSlide(e) {
    if (e && slideIndex < slides.length - 1) {
      setSlideIndex(slideIndex + 1);
    }
    if (e && slideIndex === slides.length - 1) {
      setSlideIndex(0);
    }
  }

  function prevSlide(e) {
    if (e && slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    }
    if (e && slideIndex === 0) {
      setSlideIndex(slides.length - 1);
    }
  }

  return <Arrows handleNextClick={nextSlide} handlePrevClick={prevSlide} />;
}
