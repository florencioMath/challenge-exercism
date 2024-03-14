export const HOURS_OF_WORK = 8;
export const BILLABLE_DAYS = 22;

/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
export function dayRate(ratePerHour) {
  return ratePerHour * HOURS_OF_WORK;
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour) {
  return Math.floor((budget / HOURS_OF_WORK) / ratePerHour);
}

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const FULL_MONTHS = Math.floor(numDays / BILLABLE_DAYS);
  const REMAINING_DAYS = numDays % BILLABLE_DAYS;
  const COST_FULL_MONTHS = FULL_MONTHS * BILLABLE_DAYS * dayRate(ratePerHour);  

  return Math.ceil(COST_FULL_MONTHS - discount * COST_FULL_MONTHS + REMAINING_DAYS * dayRate(ratePerHour));
}