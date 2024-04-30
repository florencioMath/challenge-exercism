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

// Bird Watcher
// export function totalBirdCount(birdsPerDay) {
//   let TOTAL_OF_BIRDS = 0;
//   for(let i = 0; i < birdsPerDay.length; i++) {
//     TOTAL_OF_BIRDS += birdsPerDay[i];
//   }
//   return TOTAL_OF_BIRDS;
// }
//
// export function birdsInWeek(birdsPerDay, week) {
//   const WEEK_TO_COUNT = week;
//   const ARRAY_OF_BIRDS = birdsPerDay.slice((week - 1) * 7, (week - 1) * 7 + 7);
//   return totalBirdCount(ARRAY_OF_BIRDS);
// }
//
// export function fixBirdCountLog(birdsPerDay) {
//   let INDEX_TO_INCREMENT = 1;
//   for(let i = 0; i < birdsPerDay.length; i++) {
//     if(INDEX_TO_INCREMENT%2 !== 0) {
//       birdsPerDay[i] = birdsPerDay[i] + 1;
//     } else {
//       birdsPerDay[i] = birdsPerDay[i];
//     }
//     ++INDEX_TO_INCREMENT;
//   }
//   return birdsPerDay;
// }

// *****************************************************************************//

// Mixed Juices
// export function timeToMixJuice(name) {
//   switch (name) {
//     case 'Pure Strawberry Joy':
//       return 0.5;
//       break;
//     case 'Energizer':
//       return 1.5;
//       break;
//     case 'Green Garden':
//       return 1.5;
//       break;
//     case 'Tropical Island':
//       return 3;
//       break;
//     case 'All or Nothing':
//       return 5;
//       break;
//     default :
//       return 2.5
//   }
// }
//
// export function limesToCut(wedgesNeeded, limes) {
//   let limesCuted = 0;
//   while(wedgesNeeded > 0 && limes.length > 0) {
//     wedgesNeeded -= wedgesSize(limes[0]);
//     limes.shift();
//     limesCuted++;
//   }
//   return limesCuted;
// }
//
// export function wedgesSize(size) {
//   switch (size) {
//     case 'small':
//       return 6;
//     case 'medium':
//       return 8;
//     case 'large':
//       return 10;
//   }
// }
//
// export function remainingOrders(timeLeft, orders) {
//   do {
//     timeLeft -= timeToMixJuice(orders[0]);
//     orders.shift();
//   } while(timeLeft > 0 && orders.length >= 0);
//   return orders;
// }

// *****************************************************************************//

// High Score Board
// export function createScoreBoard() {
//   return {'The Best Ever': 1000000 }
//  }

//  export function addPlayer(scoreBoard, player, score) {
//    scoreBoard[player] = score;
//    return scoreBoard;
//  }

//  export function removePlayer(scoreBoard, player) {
//    delete scoreBoard[player];
//    return scoreBoard;
//  }

//  export function updateScore(scoreBoard, player, points) {
//    scoreBoard[player] += points;
//    return scoreBoard;
//  }

//  export function applyMondayBonus(scoreBoard) {
//    for(let key in scoreBoard) {
//      scoreBoard[key] += 100;
//    }
//    return scoreBoard;
//  }

//  export function normalizeScore(params) {
//    return params.normalizeFunction(params.score);
//  }

// *****************************************************************************//

// Amusement Park
// export function createVisitor(name, age, ticketId) {
//   return {name: name, age: age, ticketId: ticketId};
// }
//
// export function revokeTicket(visitor) {
//   visitor["ticketId"] = null;
//   return visitor;
// }
//
// export function ticketStatus(tickets, ticketId) {
//   if(tickets[ticketId] === null) return "not sold";
//
//   if(tickets[ticketId] === undefined) return "unknown ticket id";
//   if(tickets[ticketId] === tickets[ticketId]) return "sold to " + tickets[ticketId];
// }
//
// export function simpleTicketStatus(tickets, ticketId) {
//   return tickets[ticketId] ?? "invalid ticket !!!";
// }
//
// export function gtcVersion(visitor) {
//   return visitor.gtc?.version;
// }

// *****************************************************************************//

// Lucky Numbers
// export function twoSum(array1, array2) {
//   return Number(array1.join('')) + Number(array2.join(''));
// }
//
// export function luckyNumber(value) {
//   const ARRAY_REVERSED = String(value).split('').reverse();
//   return value === Number(ARRAY_REVERSED.join(''));
// }
//
// export function errorMessage(input) {
//   if(!Boolean(input)) return 'Required field';
//   if(!Number(input)) return 'Must be a number besides 0';
//   return '';
// }

// *****************************************************************************//
