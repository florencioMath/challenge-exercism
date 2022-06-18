// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  const days = birdsPerDay.length;
  let count = 0;
  for (let i = 0; i < days; i++) {
    count += birdsPerDay[i];
  }
  return count;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
let totalBirdsWeek = 0;
export function birdsInWeek(birdsPerDay, week) {
  for (let i = 0; i < birdsPerDay.length; i++) {
    totalBirdsWeek += birdsPerDay[i];
  }
  return totalBirdsWeek / week;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  throw new Error("Please implement the fixBirdCountLog function");
}
