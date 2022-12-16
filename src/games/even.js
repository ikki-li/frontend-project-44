import { cons } from '@hexlet/pairs';
import run from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (x) => (x % 2 === 0);

const generateRound = () => {
  const question = getRandomNumber(1, 99);
  const rightAnswer = isEven(question) ? 'yes' : 'no';

  return cons(question, rightAnswer);
};

const runEven = () => {
  run(description, generateRound);
};

export default runEven;
