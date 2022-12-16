import { cons } from '@hexlet/pairs';
import run from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (x, y) => {
  if (y > x) {
    return getGcd(y, x);
  }
  if (!y) {
    return x;
  }
  return getGcd(y, x % y);
};

const generateRound = () => {
  const dividend1 = getRandomNumber(2, 100);
  const dividend2 = getRandomNumber(2, 100);

  const question = `${dividend1} ${dividend2}`;
  const rightAnswer = String(getGcd(dividend1, dividend2));
  return cons(question, rightAnswer);
};

const runGcd = () => {
  run(description, generateRound);
};

export default runGcd;
