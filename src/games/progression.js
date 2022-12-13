import { cons } from '@hexlet/pairs';
import run from '../index.js';
import { getRandIndex, getRandNmb } from '../utils.js';

const getAP = (lengthOfAP, firstTerm, step) => {
  const AP = [];

  let term = firstTerm;
  for (let i = 0; i < lengthOfAP; i += 1) {
    AP[i] = term;
    term += step;
  }
  return AP;
};

const getQA = () => {
  const lengthOfAP = getRandNmb(5, 10);
  const firstTerm = getRandNmb(1, 20);
  const step = getRandNmb(2, 10);

  const AP = getAP(lengthOfAP, firstTerm, step);

  const randIndex = getRandIndex(AP);
  const rightAnswer = String(AP[randIndex]);
  AP[randIndex] = '..';

  const separator = ' ';
  const expression = AP.join(separator);

  return cons(expression, rightAnswer);
};

const runProgression = () => {
  const rulesOfGame = 'What number is missing in the progression?';
  run(rulesOfGame, getQA);
};

export default runProgression;
