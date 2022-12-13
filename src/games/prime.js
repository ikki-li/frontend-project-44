import { cons } from '@hexlet/pairs';
import run from '../index.js';
import { getRandNmb } from '../utils.js';

const isPrime = (n, divider = 2) => {
  if (n % divider === 0) {
    return false;
  }
  if (divider * divider > n) {
    return true;
  }
  return isPrime(n, divider + 1);
};

const getQA = () => {
  const randNmb = getRandNmb(3, 100);
  const expression = String(randNmb);
  const rightAnswer = isPrime(randNmb) ? 'yes' : 'no';
  return cons(expression, rightAnswer);
};

const runPrime = () => {
  const rulesOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  run(rulesOfGame, getQA);
};

export default runPrime;
