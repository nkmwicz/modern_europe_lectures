import { useRecoilState, useRecoilValue } from "recoil";
import {
  map1900State,
  map1914State,
  mapCenterState,
  slideState,
} from "./globalState";
import { Polygon, Popup, useMap } from "react-leaflet";
import { useEffect, useMemo } from "react";

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
  const memoedMap1900 = useMemo(() => {
    const borders1900 = map1900.map((feature, i) => {
      return (
        <Polygon
          key={`map1900${i}`}
          positions={feature.geometry.coordinates}
          pathOptions={{
            color: "black",
            weight: 1,
            opacity: 0.8,
            fillColor: slide.stateColors
              ? slide.stateColors[feature.properties.NAME]
              : "grey",
          }}
        >
          <Popup>
            <strong>{feature.properties.NAME}</strong>
            {slide.stateCaption ? <br /> : null}
            {slide.stateCaption
              ? `${slide.stateCaption[feature.properties.NAME]}`
              : null}
          </Popup>
        </Polygon>
      );
    });
    return borders1900;
  }, [map1900, slide]);
  const memoedMap1914 = useMemo(() => {
    const borders1914 = map1914.map((feature, i) => {
      return (
        <Polygon
          key={`map1900${i}`}
          positions={feature.geometry.coordinates}
          pathOptions={{
            color: "black",
            weight: 1,
            opacity: 0.8,
            fillColor: slide.stateColors
              ? slide.stateColors[feature.properties.NAME]
              : "grey",
          }}
        >
          <Popup>
            <strong>{feature.properties.NAME}</strong>
            {slide.stateCaption ? <br /> : null}
            {slide.stateCaption
              ? `${slide.stateCaption[feature.properties.NAME]}`
              : null}
          </Popup>
        </Polygon>
      );
    });
    return borders1914;
  }, [map1914, slide]);

  return (
    <>
      {slide.year === 1900 ? memoedMap1900 : null}
      {slide.year === 1914 ? memoedMap1914 : null}
    </>
  );
}
