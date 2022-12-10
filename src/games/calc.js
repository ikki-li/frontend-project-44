import { cons } from '@hexlet/pairs';
import { getInteractive } from '../index.js';

const getOneRound = () => {
  const operators = ['+', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  const randomOperator = operators[randomIndex];
  const randomNmb1 = Math.floor(Math.random() * 99 + 1);
  const randomNmb2 = Math.floor(Math.random() * 9 + 1);

  const expression = `${randomNmb1} ${randomOperator} ${randomNmb2}`;

  let rightAnswer = '';
  switch (randomOperator) {
    case '+':
      rightAnswer = String(randomNmb1 + randomNmb2);
      break;
    case '*':
      rightAnswer = String(randomNmb1 * randomNmb2);
      break;
    default:
      rightAnswer = null;
  }

  return cons(expression, rightAnswer);
};

// eslint-disable-next-line import/prefer-default-export
export const calculate = () => {
  const rulesOfGame = 'What is the result of the expression?';
  getInteractive(rulesOfGame, getOneRound);
};
