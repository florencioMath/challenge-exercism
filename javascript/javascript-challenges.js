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

// *****************************************************************************//

// Poetry Club Door Policy
//
// export function frontDoorResponse(line) {
//   return line[0];
// }
//
// export function frontDoorPassword(word) {
//   const FIRST_LETTER = word[0].toUpperCase();
//   const REST_OF_WORD = word.slice(1, word.length).toLowerCase();
//   const FORMATED_WORD = FIRST_LETTER + REST_OF_WORD;
//   return FORMATED_WORD;
// }
//
// export function backDoorResponse(line) {
//   return line.trim()[line.trim().length - 1]
// }
//
// export function backDoorPassword(word) {
//   return frontDoorPassword(word) + ', please';
// }

// *****************************************************************************//

// Elyses Enchantments
// export function getItem(cards, position) {
//   return cards[position];
// }
//
// export function setItem(cards, position, replacementCard) {
//   // cards.splice(position, 1, replacementCard);
//   cards[position] = replacementCard;
//   return cards;
// }
//
// export function insertItemAtTop(cards, newCard) {
//   cards.push(newCard);
//   return cards;
// }
//
// export function removeItem(cards, position) {
//   cards.splice(position, 1);
//   return cards;
// }
//
// export function removeItemFromTop(cards) {
//   cards.pop();
//   return cards;
// }
//
// export function insertItemAtBottom(cards, newCard) {
//   cards.unshift(newCard);
//   return cards;
// }
//
// export function removeItemAtBottom(cards) {
//   cards.shift();
//   return cards;
// }
//
// export function checkSizeOfStack(cards, stackSize) {
//   return cards.length === stackSize;
// }

// *****************************************************************************//

// Vehicle Purchase
// export function needsLicense(kind) {
//   if(kind === 'car' || kind === 'truck'){
//     return true;
//   }
//   return false;
// }
//
// export function chooseVehicle(option1, option2) {
//   if(option1 <= option2) {
//     return option1 + ' is clearly the better choice.';
//   } else {
//     return option2 + ' is clearly the better choice.';
//   }
// }
//
// export function calculateResellPrice(originalPrice, age) {
//   if(age < 3) {
//     return (80 / 100) * originalPrice;
//   } else if(age >= 3 && age <= 10) {
//     return (70 / 100) * originalPrice;
//   } else {
//     return (50 / 100) * originalPrice;
//   }
// }

// *****************************************************************************//