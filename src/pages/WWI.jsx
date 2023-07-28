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
import { useMapCenterOfFirstMap } from "../hooks/useMapCenterOfFirstMap";

export function WWI() {
  const mapCenter = useMapCenterOfFirstMap();
  use1900();
  use1914();

  return (
    <PageTemplateMap
      url="https://raw.githubusercontent.com/nkmwicz/teach-lectures/master/modern-europe/27-wwi.json"
      mapCenter={mapCenter}
    />
  );
}
