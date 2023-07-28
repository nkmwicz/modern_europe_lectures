import { useRecoilState, useRecoilValue } from "recoil";
import {
  map1900State,
  map1914State,
  mapCenterState,
  slideState,
} from "./globalState";
import { Polygon, Popup, useMap } from "react-leaflet";
import { useEffect, useMemo } from "react";
import { MapGlobalBorders } from "./MapGlobalBorders";

export function MapBorders() {
  const map1900 = useRecoilValue(map1900State);
  const map1914 = useRecoilValue(map1914State);
  const slide = useRecoilValue(slideState);
  const [mapCenter, setMapCenter] = useRecoilState(mapCenterState);
  const map = useMap();
  function handleFlyToEnd() {
    setMapCenter(slide.mapCenter);
  }

  useEffect(() => {
    if (slide.mapCenter) {
      if (slide.zoom && slide.mapCenter) {
        map.flyTo(slide.mapCenter, slide.zoom, {
          onEnd: handleFlyToEnd(),
        });
      }
      if (!slide.zoom && slide.mapCenter) {
        map.flyTo(slide.mapCenter, map.getZoom(), {
          onEnd: handleFlyToEnd(),
        });
      }
    }
  }, [slide.mapCenter]);

  return (
    <>
      <MapGlobalBorders
        mapState={slide.year === 1900 ? map1900 : map1914}
        slide={slide}
      />
    </>
  );
}
