import { cons as generatePair } from '@hexlet/pairs';
import run from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';
const minDividend = 2;
const maxDividend = 100;

const getGcd = (x, y) => (y === 0 ? x : getGcd(y, x % y));

const generateRound = () => {
  const dividend1 = getRandomNumber(minDividend, maxDividend);
  const dividend2 = getRandomNumber(minDividend, maxDividend);
  const question = `${dividend1} ${dividend2}`;
  const rightAnswer = String(getGcd(dividend1, dividend2));
  return generatePair(question, rightAnswer);
};

const runGcd = () => {
  run(description, generateRound);
};

export default runGcd;
