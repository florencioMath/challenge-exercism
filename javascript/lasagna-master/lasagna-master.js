/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

//  1. Determine whether the lasagna is done
export function cookingStatus(remainingTime) {
  if (remainingTime === 0) {
    return "Lasagna is done.";
  } else if (remainingTime > 0) {
    return "Not done, please wait.";
  } else {
    return "You forgot to set the timer.";
  }
}

// 2. Estimate the preparation time
export function preparationTime(layers, timePerLayer = 2) {
  return layers.length * timePerLayer;
}

// 3. Compute the amounts of noodles and sauce needed
export function quantities(layers) {
  let noodles = 0;
  let sauce = 0;
  layers.forEach((layer) => {
    if (layer === "noodles") {
      noodles += 50;
    } else if (layer === "sauce") {
      sauce += 0.2;
    }
  });
  return { noodles, sauce };
}
