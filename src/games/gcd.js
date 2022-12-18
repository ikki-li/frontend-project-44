import { cons } from '@hexlet/pairs';
import run from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';
const minNumber = 2;
const maxNumber = 100;

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
  const dividend1 = getRandomNumber(minNumber, maxNumber);
  const dividend2 = getRandomNumber(minNumber, maxNumber);

  const question = `${dividend1} ${dividend2}`;
  const rightAnswer = String(getGcd(dividend1, dividend2));
  return cons(question, rightAnswer);
};

const runGcd = () => {
  run(description, generateRound);
};

export default runGcd;
