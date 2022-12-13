import { cons } from '@hexlet/pairs';
import run from '../index.js';
import { getRandNmb } from '../utils.js';

const getGCD = (x, y) => {
  if (y > x) {
    return getGCD(y, x);
  }
  if (!y) {
    return x;
  }
  return getGCD(y, x % y);
};

const getQA = () => {
  const dividend1 = getRandNmb(2, 100);
  const dividend2 = getRandNmb(2, 100);

  const expression = `${dividend1} ${dividend2}`;
  const rightAnswer = String(getGCD(dividend1, dividend2));
  return cons(expression, rightAnswer);
};

const runGCD = () => {
  const rulesOfGame = 'Find the greatest common divisor of given numbers.';
  run(rulesOfGame, getQA);
};

export default runGCD;
