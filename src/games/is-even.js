import { cons } from '@hexlet/pairs';
import { getInteractive } from '../index.js';

const getOneRound = () => {
  const expression = Math.floor(Math.random() * 99 + 1);

  let rightAnswer = '';
  if (expression % 2 === 0) {
    rightAnswer = 'yes';
  } else {
    rightAnswer = 'no';
  }
  return cons(expression, rightAnswer);
};
// eslint-disable-next-line import/prefer-default-export
export const isEven = () => {
  const rulesOfGame = 'Answer "yes" if the number is even, otherwise answer "no"';
  getInteractive(rulesOfGame, getOneRound);
};
