import React from "react";
import { ReactComponent as Square } from "../../assets/square.svg";

import { ReactComponent as Circle } from "../../assets/circle.svg";

import { ReactComponent as Triangle } from "../../assets/triangle.svg";

interface Prop {
  type: "square" | "circle" | "triangle";
}

const componentMap: Record<string, React.ReactElement<any, any>> = {
  square: <Square />,
  circle: <Circle />,
  triangle: <Triangle />,
};

export const Shape: React.FC<Prop> = ({ type }) => {
  return componentMap[type];
};
