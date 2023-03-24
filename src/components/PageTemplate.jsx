import React from "react";
import {
  QuickLayoutNoArrows,
  cacheImages,
  Spinner,
} from "@nkmwicz/reactpresentation";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  allSlides,
  slideIndexState,
  slideState,
} from "../components/globalState";

export function PageTemplate({ url }) {
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

  return <QuickLayoutNoArrows mode={"dark"} slide={slide} />;
}
