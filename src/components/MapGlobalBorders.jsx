import { useEffect } from "react";
import { Polygon, Popup, useMap } from "react-leaflet";
import L from "leaflet";

export function MapGlobalBorders({ mapState, slide }) {
  const map = useMap();

  const handleOpenPopup = (place, coords) => {
    const popup = L.popup().setLatLng(coords).setContent(`${place}`);
    map.openPopup(popup);
  };

  useEffect(() => {
    if (slide.popup && slide.popupCoords) {
      handleOpenPopup(slide.popup, slide.popupCoords);
    }
    if (!slide.popup && !slide.popupCoords) {
      map.closePopup();
    }
  }, [slide]);

  const BordersYear = mapState.map((feature, i) => {
    const { NAME } = feature.properties;

    return (
      <Polygon
        key={`${mapState}${i}`}
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
          <strong>{NAME}</strong>
          {slide.stateCaption ? <br /> : null}
          {slide.stateCaption
            ? `${slide.stateCaption[feature.properties.NAME]}`
            : null}
        </Popup>
      </Polygon>
    );
  });
  return BordersYear;
}
