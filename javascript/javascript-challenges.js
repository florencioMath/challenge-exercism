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

// Lasagna Master
// export function cookingStatus(remainingTime) {
//   if(remainingTime === undefined) return 'You forgot to set the timer.';
//
//   if(remainingTime === 0) return 'Lasagna is done.';
//
//   return 'Not done, please wait.';
// }
//
// export function preparationTime(layers, timePerLayer = 2) {
//   return layers.length * timePerLayer;
// }
//
// export function quantities(layers) {
//   let amountOfNoodles = 0;
//   let amountOfSauce = 0;
//   for(let i = 0; i < layers.length; i++) {
//     if(layers[i] === 'noodles') amountOfNoodles += 50;
//     if(layers[i] === 'sauce') amountOfSauce += 0.2;
//   }
//
//   return {noodles: amountOfNoodles, sauce: amountOfSauce};
// }
//
// export function addSecretIngredient(friendsList, myList) {
//   myList.push(friendsList[friendsList.length - 1]);
// }
//
// export function scaleRecipe(recipe, portions) {
//   const scaledRecipe = {};
//   for(const portion in recipe) {
//     scaledRecipe[portion] =  recipe[portion] * portions / 2;
//   }
//   return scaledRecipe;
// }

// *****************************************************************************//

// Elyses Destructured Enchantments
// export function getFirstCard(deck) {
//   const [FIRST_CARD] = deck;
//   return FIRST_CARD;
// }
//
// export function getSecondCard(deck) {
//  const [FIRST_CARD, SECOND_CARD] = deck;
//  return SECOND_CARD;
// }
//
// export function swapTopTwoCards(deck) {
//   const [FIRST_CARD, SECOND_CARD, ...everythingElse] = deck;
//   return [SECOND_CARD, FIRST_CARD, ...everythingElse];
// }
//
// export function discardTopCard(deck) {
//   const [TOP_CARD, ...everythingElse] = deck;
//   return [TOP_CARD, [...everythingElse]];
// }
//
// const FACE_CARDS = ['jack', 'queen', 'king'];
// export function insertFaceCards(deck) {
//   const [FIRST_CARD, ...everythingElse] = deck;
//   return [FIRST_CARD, ...FACE_CARDS, ...everythingElse];
// }

// *****************************************************************************//

// Coordinate Transformation
// export function translate2d(dx, dy) {
//   return function moveCoordinatesRight2Px(x, y) {
//     return [dx + x, dy + y];
//   }
// }
//
// export function scale2d(sx, sy) {
//   return function doubleScale(x, y) {
//     return [sx * x, sy * y];
//   }
// }
//
// export function composeTransform(f, g) {
//    function compose(x, y) {
//         const composedFunc = f(x, y);
//         return g(composedFunc[0], composedFunc[1]);
//     }
//     return compose;
// }
//
// export function memoizeTransform(f) {
//   let lastInput = [];
//   let lastResult = [];
//   function memoize(a, b) {
//     if (lastInput[0] == a  && lastInput[1] == b) return lastResult
//     lastInput = [a, b];
//     lastResult = f(a, b);
//     return lastResult;
//  }
//   return memoize;
// }

// *****************************************************************************//

// Fruit Picker
// export function notify(message) {
//   // This is a mocked function for use with the exercise.
//   message;
// }

// export function order(query, onSuccess, onError) {
//   // This is a mocked function for use with the exercise.
//   query;
//   onSuccess;
//   onError;
// }

// export function onSuccess() {
//   return notify({"message": "SUCCESS"});
// }

// export function onError() {
//   return notify({ message: 'ERROR' });
// }

// export function orderFromGrocer(query, onSuccessCallback, onErrorCallback) {
//   return order(query, onSuccessCallback, onErrorCallback);
// }

// export function postOrder(variety, quantity) {
//   return order({variety, quantity}, onSuccess, onError);
// }

// *****************************************************************************//

// Elyses Analytic Enchantments
// export function getCardPosition(stack, card) {
//   return stack.indexOf(card);
// }

// export function doesStackIncludeCard(stack, card) {
//   return stack.includes(card);
// }

// export function isEachCardEven(stack) {
//   return stack.every(num => num % 2 == 0);
// }

// export function doesStackIncludeOddCard(stack) {
//   return stack.some(num => num %2 !== 0);
// }

// export function getFirstOddCard(stack) {
//   return stack.find(num => num %2 !== 0);
// }

// export function getFirstEvenCardPosition(stack) {
//   return stack.findIndex(num => num %2 == 0);
// }

// *****************************************************************************//

// Elyses Looping Enchantments
// export function cardTypeCheck(stack, card) {
//   let sameType = 0;

//   stack.forEach((stackCard) => {
//     if(stackCard === card) sameType++;
//   });
//   return sameType;
// }

// export function determineOddEvenCards(stack, type) {
//   let count = 0;
//   const evenOrOdd = type ? 0 : 1;

//   for (const card of stack) {
//     if(card % 2 === evenOrOdd) count++;
//   }
//   return count;
// }

// *****************************************************************************//

// Elyses Transformative Enchantments
// export function seeingDouble(deck) {
//   return deck.map((card) => card += card);
// }
//
// export function threeOfEachThree(deck) {
//   return deck.reduce((acc, cur) => {
//     if(cur === 3)acc.splice(acc.length + 1, 0, 3, 3);
//     return [...acc, cur]
//   }, [])
// }
//
// export function middleTwo(deck) {
//   const deckMiddle = Math.round(deck.length / 2) - 1;
//   const cardsToCut = deckMiddle + 2;
//
//   return deck.slice(deckMiddle, cardsToCut);
// }
//
// export function sandwichTrick(deck) {
//   const middleDeck = Math.floor(deck.length / 2) - 1;
//   const firstCard = deck.shift();
//   const lastCard = deck.pop();
//
//   deck.splice(middleDeck, 0, lastCard, firstCard);
//   return deck;
// }
//
// export function twoIsSpecial(deck) {
//   return deck.filter((card) => card === 2);
// }
//
// export function perfectlyOrdered(deck) {
//   return deck.sort((n1, n2) => n1 < n2 ? -1 : 1);
// }
//
// export function reorder(deck) {
//   return deck.reverse();
// }

// *****************************************************************************//

// Pizza Order
// Solution 1 - Without Recursion
// const priceMargherita = 7;
// const priceCaprese = 9;
// const priceFormaggio = 10;
// const priceExtraSauce = 1;
// const priceExtraToppings = 2;
//
// export function pizzaPrice(pizza, ...extras) {
//   let total = 0;
//   if(pizza === 'Margherita') total += priceMargherita;
//   if(pizza === 'Caprese') total += priceCaprese;
//   if(pizza === 'Formaggio') total += priceFormaggio;
//   if(extras.length <= 0) {
//     return total;
//   } else {
//       for (let i = 0; i < extras.length; i++) {
//         if(extras[i] === 'ExtraSauce') total += 1;
//         if(extras[i] === 'ExtraToppings') total += 2;
//     }
//   }
//   return total;
// }
//
// export function orderPrice(pizzaOrders) {
//   let total = 0;
//
//   if(!pizzaOrders) return total;
//   for (let i = 0; i < pizzaOrders.length; i++) {
//     total += pizzaPrice(pizzaOrders[i].pizza, ...pizzaOrders[i].extras);
//   }
//
//   return total;
// }

// Solution 2 - With Recursion
// const PRICES = {
//   Margherita: 7,
//   Caprese: 9,
//   Formaggio: 10,
//   ExtraSauce: 1,
//   ExtraToppings: 2
// }
//
// export function pizzaPrice(pizza, ...extras) {
//   if(extras.length <= 0) return PRICES[pizza];
//   return PRICES[pizza] + pizzaPrice(...extras);
// }
//
// export function orderPrice(pizzaOrders) {
//   return pizzaOrders.reduce((result, order) => result + pizzaPrice(order.pizza, ...order.extras), 0);
// }

// *****************************************************************************//

// Custom Signs
// export function buildSign(occasion, name) {
//   return `Happy ${occasion} ${name}!`;
// }
//
// export function buildBirthdaySign(age) {
//   return `Happy Birthday! What a ${age >= 50 ? 'mature' : 'young'} fellow you are.`;
// }
//
// export function graduationFor(name, year) {
//   return `Congratulations ${name}!\nClass of ${year}`;
// }
//
// export function costOf(sign, currency) {
//   const SIGN_PRICE = (sign.length * 2 + 20).toFixed(2);
//   return `Your sign costs ${SIGN_PRICE} ${currency}.`
// }

// *****************************************************************************//

// Windowing System
// export function Size(width = 80, height = 60) {
//   this.width = width;
//   this.height = height;
// }
//
// Size.prototype.resize = function resize(newWidth, newHeight) {
//   this.width = newWidth;
//   this.height = newHeight;
// }
//
// export function Position(x = 0, y = 0) {
//   this.x = x;
//   this.y = y;
// }
//
// Position.prototype.move = function move(newX, newY) {
//   this.x = newX;
//   this.y = newY;
// }
//
// export class ProgramWindow {
//   constructor() {
//     this.screenSize = new Size(800, 600);
//     this.size = new Size();
//     this.position = new Position();
//   }
//
//   resize(newSize) {
//     const maxWidth = this.screenSize.width - this.position.x;
//     const maxHeight = this.screenSize.height - this.position.y;
//
//     const newWidth = Math.max(1, Math.min(newSize.width, maxWidth));
//     const newHeight = Math.max(1, Math.min(newSize.height, maxHeight));
//
//     this.size.resize(newWidth, newHeight);
//   }
//
//   move(newPosition) {
//     const maxX = this.screenSize.width - this.size.width;
//     const maxY = this.screenSize.height - this.size.height;
//
//     const newX = Math.max(0, Math.min(newPosition.x, maxX));
//     const newY = Math.max(0, Math.min(newPosition.y, maxY));
//
//     this.position.move(newX, newY);
//   }
// }
//
// export function changeWindow(programWindow) {
//   programWindow.move(new Position());
//
//   programWindow.resize(new Size(400, 300));
//   programWindow.move(new Position(100, 150));
//
//   return programWindow;
// }

// *****************************************************************************//

// Ozan's Playlist
// export function removeDuplicates(playlist) {
//   return Array.from(new Set(playlist));
// }
//
// export function hasTrack(playlist, track) {
//   return new Set(playlist).has(track);
// }
//
// export function addTrack(playlist, track) {
//   return Array.from(new Set(playlist).add(track));
// }
//
// export function deleteTrack(playlist, track) {
//   const newPlaylist = new Set(playlist);
//   newPlaylist.delete(track)
//   return Array.from(newPlaylist);
// }
//
// export function listArtists(playlist) {
//   let artists = [];
//   playlist.forEach((track) => {
//     artists.push(track.split(' - ')[1]);
//   });
//
//   // return Array.from(new Set(playlist.map((track) => track.split(' - ').pop()))); - Apenas 1 linha
//   return removeDuplicates(artists);
// }

// *****************************************************************************//

// Factory Sensors
// export class ArgumentError extends Error {}
//
// export class OverheatingError extends Error {
//   constructor(temperature) {
//     super(`The temperature is ${temperature} ! Overheating !`);
//     this.temperature = temperature;
//   }
// }
//
// export function checkHumidityLevel(humidityPercentage) {
//   if(humidityPercentage >= 70) throw new Error('Humidity exceeds 70%!');
// }
//
// export function reportOverheating(temperature) {
//   if(temperature === null) throw new ArgumentError;
//   if(temperature >= 500) throw new OverheatingError(temperature);
// }
//
// export function monitorTheMachine(actions) {
//   try {
//     actions.check();
//   } catch (error) {
//     if(error instanceof ArgumentError) {
//       return actions.alertDeadSensor();
//     }
//
//     if(error instanceof OverheatingError) {
//       if(error.temperature >= 600) return actions.shutdown();
//       return actions.alertOverheating();
//     }
//
//     return actions.check();
//   }
// }

// *****************************************************************************//

// Translation Service
// export class TranslationService {
//
//   constructor(api) {
//     this.api = api;
//   }
//
//   free(text) {
//     return this.api.fetch(text).then(function (response) {
//       return response.translation;
//     }).catch(function (error) {
//         throw error;
//     });
//   }
//
//   batch(texts) {
//     if(texts.length === 0) {
//       return Promise.reject(new BatchIsEmpty());
//     }
//     const freePromises = texts.map(text => this.free(text));
//     return Promise.all(freePromises)
//       .then(function(responses) {
//         return responses;
//       })
//       .catch(function(error) {
//         return Promise.reject(error);
//       });
//   }
//
//   request(text) {
//     const newRequest = () => new Promise((resolve, reject) => {
//       this.api.request(text, (result) => {
//         result ? reject(result) : resolve();
//       })
//     })
//     return newRequest().catch(newRequest).catch(newRequest);
//   }
//
//   premium(text, minimumQuality) {
//     return this.api.fetch(text)
//       .catch(() => {
//         return this.request(text).then(() => this.api.fetch(text));
//       })
//       .then((response) => {
//         if(response.quality < minimumQuality) {
//           throw new QualityThresholdNotMet();
//         }
//         return response.translation;
//       })
//   }
// }
//
// export class QualityThresholdNotMet extends Error {
//   constructor(text) {
//     super(`The translation of ${text} does not meet the requested quality threshold.`.trim(),);
//     this.text = text;
//   }
// }
//
// export class BatchIsEmpty extends Error {
//   constructor() {
//     super(`Requested a batch translation, but there are no texts in the batch.`.trim(),);
//   }
// }

// *****************************************************************************//

// Regular Chatbot
// export function isValidCommand(command) {
//   return /chatbot/.test(command.toLowerCase().split(/[,.\s]/)[0]);
// }
//
// export function removeEmoji(message) {
//   const regex = new RegExp(/emoji[0-9]{4}/, 'gi');
//
//   return message.replace(regex, '');
// }
//
// export function checkPhoneNumber(number) {
//   const regex = new RegExp(/^\(\+\d{2}\) \d{3}-\d{3}-\d{3}$/);
//   const msgValid = "Thanks! You can now download me to your phone.";
//   const msgInvalid = `Oops, it seems like I can't reach out to ${number}`
//
//   return regex.test(number) ? msgValid : msgInvalid;
// }
//
// export function getURL(userInput) {
//   return userInput.split(/[ ]/).filter((string) => (/[.]/).test(string));
// }
//
// export function niceToMeetYou(fullName) {
//   const greetings = 'Nice to meet you, ';
//   const name = fullName.replace(',', '').split(/[ ]/).reverse().join(' ');
//   return greetings + name;
//
//   // const [lastName, firstName] = fullName.split(", ");
//   // return "Nice to meet you, " + firstName + " " + lastName;
// }

// *****************************************************************************//

// Two Fer
// export const twoFer = (name) => {
//   return name ? `One for ${name}, one for me.` : 'One for you, one for me.';
// };

// *****************************************************************************//

// Resistor Color
// export const colorCode = (color) => {
//   return COLORS.indexOf(color);
// };
//
// export const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white',];
//

// *****************************************************************************//

// Resistor Color Duo
// export const decodedValue = (colorsToFind) => {
//   // One line
//   // return Number(COLORS.map((color, i) => COLORS.indexOf(colorsToFind[i])).filter(i => i != -1).slice(0, 2).join(''));
//
//   const [firstColor, secondColor] = colorsToFind;
//   const firstValue = COLORS[firstColor];
//   const secondValue = COLORS[secondColor];
//
//   return Number(`${firstValue}${secondValue}`);
// };
//
// const COLORS = {
//   black: 0,
//   brown: 1,
//   red: 2,
//   orange: 3,
//   yellow: 4,
//   green: 5,
//   blue: 6,
//   violet: 7,
//   grey: 8,
//   white: 9,
// };
//

// *****************************************************************************//

// Gigasecond
// export const gigasecond = (date) => {
//   const gigaInMiliseconds = 1000000000 * 1000;
//
//   return new Date(date.getTime() + gigaInMiliseconds);
// };

// *****************************************************************************//

// RNA Transcription
// export const toRna = (transcription) => {
//   // With Map
//   // const arrayDNA = transcription.split('');
//   // const arrayRNA = arrayDNA.map(letter => DNA[letter]).join('');
//   // return arrayRNA;
//   // With for of
//   // let RNA = '';
//   // for (let letter of transcription) {
//   //   RNA += DNA[letter];
//   // }
//   // return RNA;
//   // With Reduce
//   return transcription.split('').reduce((rna, letter) => rna + DNA[letter], '');
// };
// export const DNA = {
//   G: 'C',
//   C: 'G',
//   T: 'A',
//   A: 'U',
// }
//

// *****************************************************************************//

// Space Age
// export const age = (planet, seconds) => {
//   const earthYearInSeconds = 31557600;
//   const orbitalPeriod = ORBITALPERIODS[planet];
//   const ageInYears = seconds / (earthYearInSeconds * orbitalPeriod);
//   const age = Number(ageInYears.toFixed(2));
//
//   return age;
// };
//
// export const ORBITALPERIODS = {
//     mercury: 0.2408467,
//     venus: 0.61519726,
//     earth: 1.0,
//     mars: 1.8808158,
//     jupiter: 11.862615,
//     saturn: 29.447498,
//     uranus: 84.016846,
//     neptune: 164.79132
// };
//

// *****************************************************************************//

// Pangram
// export const isPangram = (setence) => {
//   // With Spread and Every
//   // return [...ALPHABET].every(char => setence.toLowerCase().includes(char));
//
//   const cleanSetence = setence.toLowerCase().replace(/[^a-z]/g, '');
//   const newSetence = Array.from(new Set(cleanSetence)).sort().join('');
//
//   return newSetence === ALPHABET;
// };
//

// export const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

// *****************************************************************************//

// Matrix
// export class Matrix {
//   constructor(string) {
//     this.matrix = string.split('\n');
//   }
//
//   get rows() {
//     return this.matrix.map(row => row.split(' ').map(Number));
//   }
//   get columns() {
//     return this.rows[0].map((_, i) => {
//       return this.rows.map(row => row[i]);
//     })
//   }
// }
//

// *****************************************************************************//

// Bob
// export const hey = (message) => {
//   const phrase = message.trim();
//
//   if(phrase === '') return ANSWER_SILENCE;
//
//   const isYelling = phrase === phrase.toUpperCase() && /[A-Z]/.test(phrase);
//   const isQuestion = phrase.endsWith('?');
//
//   if(isYelling && isQuestion) return ANSWER_YELL_QUESTION;
//   if(isYelling) return ANSWER_YELL;
//   if(isQuestion) return ANSWER_QUESTION;
//   return ANSWER_ANYTHING;
// };
//
// export const ANSWER_QUESTION = "Sure.";
// export const ANSWER_YELL = "Whoa, chill out!";
// export const ANSWER_YELL_QUESTION = "Calm down, I know what I'm doing!";
// export const ANSWER_SILENCE = "Fine. Be that way!";
// export const ANSWER_ANYTHING = "Whatever.";
//

// *****************************************************************************//

// Book Store
// export const discountsPrice = {
// 	0: 0,
// 	1: 800,
// 	2: 2 * 800 * 0.95,
// 	3: 3 * 800 * 0.9,
// 	4: 4 * 800 * 0.8,
// 	5: 5 * 800 * 0.75,
// };
// export const cost = (books) => {
//  let booksSet = [];
//   while (books.length > 0) {
//     booksSet.push(new Set(books).size);
//     new Set(books).forEach((elem) => {
//       books.splice(books.indexOf(elem), 1);
//     });
//   }
//
//   while (booksSet.includes(3) && booksSet.includes(5)) {
// 		booksSet.splice(booksSet.indexOf(3), 1);
// 		booksSet.splice(booksSet.indexOf(5), 1);
// 		booksSet.push(4, 4);
// 	}
//   return booksSet.reduce((total, set) => (total += discountsPrice[set]), 0);
// };
//

// *****************************************************************************//

// Pascal's Triangle
// export const rows = (rows) => {
//   // const triangle = [];
//
//   // for (let i = 0; i < rows; i++) {
//   //   triangle[i] = [];
//   //   triangle[i][0] = 1;
//   //   triangle[i][i] = 1;
//
//   //   for (let j = 1; j < i; j++) {
//   //     triangle[i][j] = triangle[i-1][j-1] + triangle[i-1][j];
//   //   }
//   // }
//
//   // return triangle;
//
//   const triangle = [];
//   if (rows >= 1) {
//     triangle.push([1]);
//   }
//
//   for (let i = 1; i < rows; i++) {
//     const previousRow = triangle[i - 1];
//     const currentRow = [1];
//
//     for (let j = 1; j < i; j++) {
//       currentRow[j] = previousRow[j - 1] + previousRow[j];
//     }
//
//     currentRow.push(1);
//     triangle.push(currentRow);
//   }
//
//   return triangle;
// };
//

// *****************************************************************************//

// Linked List
// class Node {
//   constructor(prev = null, next = null, value = null){
//     this.prev = prev;
//     this.next = next;
//     this.value = value;
//   }
// }
//
// export class LinkedList {
//   constructor() {
//     this.last = new Node();
//     this.first = new Node(null, this.last);
//     this.last.prev = this.first;
//   }
//
//   push(value) {
//     let newNode = new Node(this.last.prev, this.last, value);
//     this.last.prev.next = newNode;
//     this.last.prev = newNode;
//   }
//
//   pop() {
//     const value = this.last.prev.value;
//     this.last.prev.prev.next = this.last;
//     this.last.prev = this.last.prev.prev;
//     return value;
//   }
//
//   shift() {
//     const value = this.first.next.value;
//     this.first.next.next.prev = this.first;
//     this.first.next = this.first.next.next;
//     return value;
//   }
//
//   unshift(value) {
//     let newNode = new Node(this.first, this.first.next, value);
//     this.first.next.prev = newNode;
//     this.first.next = newNode;
//   }
//
//   delete(value) {
//     let node = this.first;
//     while (node.next !== null) {
//       if (node.value === value){
//         node.next.prev = node.prev;
//         node.prev.next = node.next;
//         break;
//       }
//       node = node.next;
//     }
//   }
//
//   count() {
//     let node = this.first;
//     let count = 0;
//     while(node.next !== this.last){
//       count++;
//       node = node.next;
//     }
//     return count;
//   }
//
// }
//

// *****************************************************************************//

// Grade School
// export class GradeSchool {
//   constructor() {
//    this._rooster = {};
//   }
//
//   roster() {
//     return this._rooster;
//   }
//
//   add(student, grade) {
//     for (let key in this._rooster) {
//         if (this._rooster[key].includes(student)) {
//             this._rooster[key] = this._rooster[key].filter(name => name !== student);
//         }
//     }
//
//     if (!this._rooster[grade]) {
//         this._rooster[grade] = [];
//     }
//
//     this._rooster[grade].push(student);
//     this._rooster[grade].sort();
//   }
//
//   grade(grade) {
//     return [...(this._rooster[grade] || [])];
//   }
//
//     roster() {
//         const copy = {};
//         for (let grade in this._rooster) {
//             copy[grade] = [...this._rooster[grade]];
//         }
//         return Object.freeze(copy);
//     }
// }
//

// *****************************************************************************//

// List Ops
// export class List {
//   constructor(values = []) {
//     this.values = values || [];
//   }
//
//   append(list) {
//     return new List([...this.values, ...list.values]);
//   }
//
//   concat(list) {
//     return list.foldl((acc, elt) => acc.append(elt), this);
//   }
//
//   filter(callback) {
//     return new List(this.foldl((acc, elt) => callback(elt) ? [...acc, elt] : acc, []));
//   }
//
//   map(callback) {
//     return new List(this.foldl((acc, elt) => [...acc, callback(elt)], []));
//   }
//
//   length() {
//     return this.foldl(i => i + 1, 0);
//   }
//
//   foldl(callback, initialValue, values) {
//     const [head, ...tail] = values || this.values;
//     return head ? this.foldl(callback, callback(initialValue, head), tail) : initialValue;
//   }
//
//   foldr(callback, initialValue) {
//     return this.reverse().foldl(callback, initialValue);
//   }

//   reverse() {
//     return new List(this.foldl((acc, elt) => [elt, ...acc], []));
//   }
// }
//

// *****************************************************************************//

// Robot Name
// export class Robot {
//   static usedNames = new Set();
//
//   constructor () {
//       this._name = this.setName();
//   }
//
//   get name() {
//       return this._name
//   }
//
//   setName = () => {
//       let name
//       do {
//         name = this.generateName()
//       } while (Robot.usedNames.has (name) )
//
//       Robot.usedNames.add(name);
//
//       return name;
//   }
//
//   generateName = () => {
//       const letter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//       const digit = '0123456789'
//       const random = (string) => {return string[Math.floor(Math.random() * (string.length))]};
//       let name = random(letter) + random(letter) + random(digit) + random(digit) + random(digit);
//
//       return name;
//   }
//
//   reset = () => {
//       this._name = this.setName();
//   }
// }
// Robot.releaseNames = () => { Robot.usedNames.clear() };
//

// *****************************************************************************//

// Simple Cipher
// export class Cipher {
//   constructor(sec) {
//     this.sec = sec;
//   }
//
//   encode(string) {
//     let strArr = string.split("");
//
//     if (!this.sec) {
//       let key = "";
//       strArr.forEach(() => {
//         let tempRandom = Math.floor(Math.random() * (122 - 97 + 1) + 97);
//         key += String.fromCharCode(tempRandom);
//       });
//       this.sec = key;
//       return this.sec;
//     }
//
//     let strs = "";
//
//     strArr.forEach((str, index) => {
//       let takeAsciiValKey = this.sec.charCodeAt(index % this.sec.length);
//       let cal = takeAsciiValKey - 97 + str.charCodeAt(0);
//       strs += String.fromCharCode(cal > 122 ? (cal - 122) + 96 : cal);
//     });
//     return strs;
//   }
//
//   decode(string) {
//     let strArr = string.split("");
//     let strs = "";
//
//     strArr.forEach((str, index) => {
//       let takeAsciiValKey = this.sec.charCodeAt(index % this.sec.length);
//       let cal = str.charCodeAt(0) - (takeAsciiValKey - 97);
//       strs += String.fromCharCode(cal < 97 ? 123 - (97 - cal) : cal);
//     });
//
//     return strs;
//   }
//
//   get key() {
//     return this.sec;
//   }
// }
//

// *****************************************************************************//
