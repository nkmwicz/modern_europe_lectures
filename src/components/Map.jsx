import { MapContainer, Polygon, Popup, useMap } from "react-leaflet";
import { useRecoilValue } from "recoil";
import { map1900State, map1914State, slideState } from "./globalState";
import { useEffect, useMemo } from "react";
import { MapLabel } from "./MapLabel";
import { MapBorders } from "./MapBorders";
import { MapKey } from "./MapKey";
import { MapLatLngIndicator } from "./MapLatLngIndicator";

export function Map({ mapCenter }) {
  const slide = useRecoilValue(slideState);

  return (
    <>
      <MapContainer center={mapCenter} className="mymap" zoom={5}>
        <MapBorders />
        <MapKey />
        <MapLatLngIndicator />
      </MapContainer>
      <MapLabel />
    </>
  );
}
