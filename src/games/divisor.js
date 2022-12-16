import { cons } from '@hexlet/pairs';
import run from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGreatestDivisor = (x, y) => {
  if (y > x) {
    return getGreatestDivisor(y, x);
  }
  if (!y) {
    return x;
  }
  return getGreatestDivisor(y, x % y);
};

const generateRound = () => {
  const dividend1 = getRandomNumber(2, 100);
  const dividend2 = getRandomNumber(2, 100);

  const question = `${dividend1} ${dividend2}`;
  const greatestDivisor = getGreatestDivisor(dividend1, dividend2);
  const rightAnswer = String(greatestDivisor);
  return cons(question, rightAnswer);
};

const runGreatestDivisor = () => {
  run(description, generateRound);
};

export default runGreatestDivisor;
