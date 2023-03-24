import React from "react";
import { QuickLayout } from "@nkmwicz/reactpresentation";

export function Week1_1() {
  const slide = {
    intro: true,
    title: "React Presentation",
    subTitle: "A React component for creating presentations",
    slide: true,
  };
  return (
    <QuickLayout
      mode={"dark"}
      slide={slide}
      nextClick={() => {
        console.log("next");
      }}
      prevClick={() => {
        console.log("prev");
      }}
    />
  );
}
