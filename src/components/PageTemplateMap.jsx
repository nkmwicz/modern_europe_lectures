import React from "react";
import {
  QuickLayoutNoArrows,
  cacheImages,
  Spinner,
  SplitSlideChild,
} from "@nkmwicz/reactpresentation";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  allSlides,
  slideIndexState,
  slideState,
} from "../components/globalState";
import { Map } from "./Map";
import { useSearchParams } from "react-router-dom";

export function PageTemplateMap({ url, mapCenter }) {
  const [slides, setSlides] = useRecoilState(allSlides);
  const slide = useRecoilValue(slideState);
  const [slideIndex, setSlideIndex] = useRecoilState(slideIndexState);
  const [isLoading, setIsLoading] = React.useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const param = searchParams.get("slideIndex");
  const isNumber = (value) => {
    return /^-?\d*\.?\d+$/.test(value);
  };

  React.useEffect(() => {
    async function fetchSlides() {
      const res = await fetch(url);
      const data = await res.json();
      setSlides(data.slides);
      await cacheImages(data.images);
      setIsLoading(false);
      if (param === null || param === undefined) {
        setSlideIndex(0);
        setSearchParams({ slideIndex: slideIndex });
        return;
      }
      if (param > data.slides.length - 1) {
        setSlideIndex(data.slides.length - 1);
        setSearchParams({ slideIndex: data.slides.length - 1 });
        return;
      }
      if (param < 0) {
        setSlideIndex(0);
        setSearchParams({ slideIndex: 0 });
        return;
      }
      if (!isNumber(param)) {
        setSlideIndex(parseInt(0));
        setSearchParams({ slideIndex: 0 });
        return;
      }
      if (param !== null || param !== undefined) {
        setSlideIndex(parseInt(param));
        setSearchParams({ slideIndex: param });
        return;
      }
    }
    fetchSlides();
  }, []);

  React.useEffect(() => {
    setSearchParams({ slideIndex: slideIndex });
  }, [slideIndex]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {slide.map ? (
        <div className="mainDark">
          <SplitSlideChild
            title={slide.title}
            subTitle={slide.subTitle}
            text={slide.text}
          >
            <Map mapCenter={mapCenter} />
          </SplitSlideChild>
        </div>
      ) : (
        <QuickLayoutNoArrows mode={"dark"} slide={slide} />
      )}
    </>
  );
}
