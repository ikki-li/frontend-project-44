import { cons } from '@hexlet/pairs';
import { getInteractive } from '../index.js';

const getOneRound = () => {
  const randomLength = Math.floor(Math.random() * 6 + 5);
  const coll = [];
  let termOfAP = Math.floor(Math.random() * 20 + 1);
  const randomStep = Math.floor(Math.random() * 9 + 2);
  for (let i = 0; i < randomLength; i += 1) {
    coll[i] = termOfAP;
    termOfAP += randomStep;
  }

  const randomIndex = Math.floor(Math.random() * coll.length);
  const rightAnswer = String(coll[randomIndex]);
  coll[randomIndex] = '..';

  const separator = ' ';
  const expression = coll.join(separator);

  return cons(expression, rightAnswer);
};

// eslint-disable-next-line import/prefer-default-export
export const getAP = () => {
  const rulesOfGame = 'What number is missing in the progression?';
  getInteractive(rulesOfGame, getOneRound);
};
