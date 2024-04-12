// 01 | Hello World
//
// export function hello() {
//   return 'Hello, World!';
// }

// *****************************************************************************//

// Lucian's Luscious Lasagna
//
// export const PREPARATION_MINUTES_PER_LAYER = 2;
// export const EXPECTED_MINUTES_IN_OVEN = 40;
//
// export function remainingMinutesInOven(actualMinutesInOven) {
//   return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
// }
//
// export function preparationTimeInMinutes(numberOfLayers) {
//   return numberOfLayers * PREPARATION_MINUTES_PER_LAYER;
// }
//
// export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
//   return preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven;
// }

// *****************************************************************************//

// Annalyn's Infiltration
//
// export function canExecuteFastAttack(knightIsAwake) {
//   return !knightIsAwake;
// }
//
// export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
//   return knightIsAwake || archerIsAwake || prisonerIsAwake;
// }
//
// export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
//   return prisonerIsAwake && !archerIsAwake;
// }
//
// export function canFreePrisoner(
//   knightIsAwake,
//   archerIsAwake,
//   prisonerIsAwake,
//   petDogIsPresent,
//  ) {
//   return (petDogIsPresent && !archerIsAwake) || (!petDogIsPresent && prisonerIsAwake && !knightIsAwake && !archerIsAwake);
// }

// *****************************************************************************//

// Freelancer Rates
// const HOUR_DAY_WORK = 8;
// const BILLABLE_DAYS = 22;
//
// export function dayRate(ratePerHour) {
//   return ratePerHour * HOUR_DAY_WORK;
// }
//
// export function daysInBudget(budget, ratePerHour) {
//   return Math.floor(budget / dayRate(ratePerHour));
// }
//
// export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
//   const FULL_MONTHS = Math.floor(numDays / BILLABLE_DAYS);
//   const REMAINING_DAYS = numDays % BILLABLE_DAYS;
//   const FULL_MONTH_PRICE = FULL_MONTHS * BILLABLE_DAYS * dayRate(ratePerHour);
//   return Math.ceil((FULL_MONTH_PRICE - discount * FULL_MONTH_PRICE) + (REMAINING_DAYS * dayRate(ratePerHour)));
// }
