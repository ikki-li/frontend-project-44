import { cons } from '@hexlet/pairs';
import run from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (x, y) => {
  if (y > x) {
    return getGCD(y, x);
  }
  if (!y) {
    return x;
  }
  return getGCD(y, x % y);
};

const generateRound = () => {
  const dividend1 = getRandomNumber(2, 100);
  const dividend2 = getRandomNumber(2, 100);

  const question = `${dividend1} ${dividend2}`;
  const rightAnswer = String(getGCD(dividend1, dividend2));
  return cons(question, rightAnswer);
};

const runGCD = () => {
  run(description, generateRound);
};

export default runGCD;
