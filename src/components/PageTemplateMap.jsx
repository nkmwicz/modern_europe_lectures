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

export function PageTemplateMap({ url, mapCenter }) {
  const [slides, setSlides] = useRecoilState(allSlides);
  const slide = useRecoilValue(slideState);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchSlides() {
      const res = await fetch(url);
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
