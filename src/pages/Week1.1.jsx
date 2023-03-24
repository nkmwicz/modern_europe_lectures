import React from "react";
import { QuickLayout, cacheImages, Spinner } from "@nkmwicz/reactpresentation";

export function Week1_1() {
  const [slides, setSlides] = React.useState([]);
  const [slide, setSlide] = React.useState({});
  const [slideIndex, setSlideIndex] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true);

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

  React.useEffect(() => {
    setSlide(slides[slideIndex]);
  }, [slideIndex, slides]);

  React.useEffect(() => {
    async function fetchSlides() {
      const res = await fetch(
        "https://raw.githubusercontent.com/nkmwicz/teach-lectures/master/modern-europe/01-introduction.json"
      );
      const data = await res.json();
      setSlides(data.slides);
      await cacheImages(data.images);
      setIsLoading(false);
    }
    fetchSlides();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <QuickLayout
      mode={"dark"}
      slide={slide}
      nextClick={nextSlide}
      prevClick={prevSlide}
    />
  );
}
