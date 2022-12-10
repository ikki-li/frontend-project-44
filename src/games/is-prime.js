import { cons } from '@hexlet/pairs';
import { getInteractive } from '../index.js';

const checkForPrime = (n, divider = 2) => {
  if (n % divider === 0) {
    return 'no';
  }
  if (divider * divider > n) {
    return 'yes';
  }
  return checkForPrime(n, divider + 1);
};

const getOneRound = () => {
  const randomNmb = Math.floor(Math.random() * 98 + 3);
  const rightAnswer = checkForPrime(randomNmb);
  const expression = String(randomNmb);
  return cons(expression, rightAnswer);
};

// eslint-disable-next-line import/prefer-default-export
export const isPrime = () => {
  const rulesOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  getInteractive(rulesOfGame, getOneRound);
};
