import { cons } from '@hexlet/pairs';
import { getInteractive } from '../index.js';

const gcd = (x, y) => {
  if (y > x) {
    return gcd(y, x);
  }
  if (!y) {
    return x;
  }
  return gcd(y, x % y);
};

const getOneRound = () => {
  const randomNmb1 = Math.floor(Math.random() * 99 + 2);
  const randomNmb2 = Math.floor(Math.random() * 99 + 2);

  const expression = `${randomNmb1} ${randomNmb2}`;
  const rightAnswer = String(gcd(randomNmb1, randomNmb2));
  return cons(expression, rightAnswer);
};

// eslint-disable-next-line import/prefer-default-export
export const getGCD = () => {
  const rulesOfGame = 'Find the greatest common divisor of given numbers.';
  getInteractive(rulesOfGame, getOneRound);
};
