//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

export const isPangram = (pharse) => {
  pharse = pharse.toLowerCase();
  return alphabet.every((letter) => pharse.includes(letter));
};
