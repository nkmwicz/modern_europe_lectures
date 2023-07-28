import React, { useEffect } from "react";
import { PageTemplate } from "../components/PageTemplate";
import { PageTemplateMap } from "../components/PageTemplateMap";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  allSlides,
  map1900State,
  map1914State,
  map1920State,
  mapCenterState,
} from "../components/globalState";
import flip from "@turf/flip";
import { use1900 } from "../mapFetches/use1900";
import { use1914 } from "../mapFetches/use1914";

export function WWI() {
  const [mapCenter, setMapCenter] = useRecoilState(mapCenterState);
  const theSlides = useRecoilValue(allSlides);
  use1900();
  use1914();

  useEffect(() => {
    const firstMapCenter = theSlides.find((slide) => {
      return slide.hasOwnProperty("mapCenter");
    });
    if (firstMapCenter) {
      setMapCenter(firstMapCenter.mapCenter);
    }
  }, [theSlides]);

  return (
    <PageTemplateMap
      url="https://raw.githubusercontent.com/nkmwicz/teach-lectures/master/modern-europe/27-wwi.json"
      mapCenter={mapCenter}
    />
  );
}
