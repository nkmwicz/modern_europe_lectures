import React, { useEffect } from "react";
import { PageTemplateMap } from "../components/PageTemplateMap";
import { use1900Map } from "../mapFetches/use1900Map";
import { use1914Map } from "../mapFetches/use1914Map";
import { useMapCenterOfFirstMap } from "../hooks/useMapCenterOfFirstMap";

export function WWI() {
  const mapCenter = useMapCenterOfFirstMap();
  use1900Map();
  use1914Map();

  return (
    <PageTemplateMap
      url="https://raw.githubusercontent.com/nkmwicz/teach-lectures/master/modern-europe/27-wwi.json"
      mapCenter={mapCenter}
    />
  );
}
