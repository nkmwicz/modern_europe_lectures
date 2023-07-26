export function MapGlobalBorders({ mapState, slide }) {
  const BordersYear = mapState.map((feature, i) => {
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
          <strong>{feature.properties.NAME}</strong>
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
