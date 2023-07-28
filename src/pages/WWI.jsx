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

export function WWI() {
  const [mapCenter, setMapCenter] = useRecoilState(mapCenterState);
  const theSlides = useRecoilValue(allSlides);
  const [map1900, setMap1900] = useRecoilState(map1900State);
  const [map1914, setMap1914] = useRecoilState(map1914State);
  const [map1920, setMap1920] = useRecoilState(map1920State);

  useEffect(() => {
    const firstMapCenter = theSlides.find((slide) => {
      return slide.hasOwnProperty("mapCenter");
    });
    if (firstMapCenter) {
      setMapCenter(firstMapCenter.mapCenter);
    }
  }, [theSlides]);

  useEffect(() => {
    async function getMaps() {
      try {
        if (map1900.length === 0) {
          const res1900 = await fetch(
            "https://raw.githubusercontent.com/aourednik/historical-basemaps/master/geojson/world_1900.geojson"
          );
          const data1900raw = await res1900.json();
          const data1900 = data1900raw.features.map((feature) => flip(feature));
          setMap1900(data1900);
        }
        if (map1914.length === 0) {
          const res1914 = await fetch(
            "https://raw.githubusercontent.com/aourednik/historical-basemaps/master/geojson/world_1914.geojson"
          );
          const data1914raw = await res1914.json();
          const data1914 = data1914raw.features.map((feature) => flip(feature));
          setMap1914(data1914);
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    getMaps();
  }, []);

  return (
    <PageTemplateMap
      url="https://raw.githubusercontent.com/nkmwicz/teach-lectures/master/modern-europe/27-wwi.json"
      mapCenter={mapCenter}
    />
  );
}
