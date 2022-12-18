import { cons } from '@hexlet/pairs';
import run from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// избавилась от магических чисел
const minNumber = 3;
const maxNumber = 100;

const isPrime = (n, divider = 2) => {
  if (n % divider === 0) {
    return false;
  }
  if (divider * divider > n) {
    return true;
  }
  return isPrime(n, divider + 1);
};

const generateRound = () => {
  const randomNumber = getRandomNumber(minNumber, maxNumber);
  const question = String(randomNumber);
  const rightAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return cons(question, rightAnswer);
};

const runPrime = () => {
  run(description, generateRound);
};

export default runPrime;
