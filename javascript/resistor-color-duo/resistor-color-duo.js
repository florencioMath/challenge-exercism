//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const getColorValue = (color) => COLORS.indexOf(color);
export const decodedValue = ([first, second]) => {
  return getColorValue(first) * 10 + getColorValue(second);
};

export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];
