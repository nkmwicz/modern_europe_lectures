import { useRecoilState, useRecoilValue } from "recoil";
import { allSlides, mapCenterState } from "../components/globalState";
import { useEffect } from "react";

export function useMapCenterOfFirstMap() {
  const [mapCenter, setMapCenter] = useRecoilState(mapCenterState);
  const theSlides = useRecoilValue(allSlides);

  useEffect(() => {
    const firstMapCenter = theSlides.find((slide) => {
      return slide.hasOwnProperty("mapCenter");
    });
    if (firstMapCenter) {
      setMapCenter(firstMapCenter.mapCenter);
    }
  }, [theSlides]);

  return mapCenter;
}
