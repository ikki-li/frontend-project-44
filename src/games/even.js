import { cons as generatePair } from '@hexlet/pairs';
import run from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';
const minNumber = 1;
const maxNumber = 99;

const isEven = (x) => (x % 2 === 0);

const generateRound = () => {
  const number = getRandomNumber(minNumber, maxNumber);
  const rightAnswer = isEven(number) ? 'yes' : 'no';
  const question = String(number);
  return generatePair(question, rightAnswer);
};

const runEven = () => {
  run(description, generateRound);
};

export default runEven;
