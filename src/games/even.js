import { cons } from '@hexlet/pairs';
import run from '../index.js';
import { getRandNmb } from '../utils.js';

const isEven = (x) => (x % 2 === 0);

const getQA = () => {
  const expression = getRandNmb(1, 99);
  const rightAnswer = isEven(expression) ? 'yes' : 'no';

  return cons(expression, rightAnswer);
};

const runEven = () => {
  const rulesOfGame = 'Answer "yes" if the number is even, otherwise answer "no"';
  run(rulesOfGame, getQA);
};

export default runEven;
