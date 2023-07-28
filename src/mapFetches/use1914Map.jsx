import flip from "@turf/flip";
import { useRecoilState } from "recoil";
import { map1914State } from "../components/globalState";
import { useEffect } from "react";
export function use1914Map() {
  const [map1914, setmap1914] = useRecoilState(map1914State);
  useEffect(() => {
    async function getMap() {
      try {
        if (map1914.length === 0) {
          const res1914 = await fetch(
            "https://raw.githubusercontent.com/aourednik/historical-basemaps/master/geojson/world_1914.geojson"
          );
          const data1914raw = await res1914.json();
          const data1914 = data1914raw.features.map((feature) => flip(feature));
          setmap1914(data1914);
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    getMap();
  }, []);
  return map1914;
}
