import { cons } from '@hexlet/pairs';
import { getInteractive } from '../index.js';

// eslint-disable-next-line import/prefer-default-export
export const calculated = () => {
  const rulesOfGame = 'What is the result of the expression?';
  const operators = ['+', '*'];
  let expression = '';
  let rightAnswer = '';
  const pairs = [];

  for (let i = 1; i < 4; i += 1) {
    const randomIndex = Math.floor(Math.random() * operators.length);
    const randomOperator = operators[randomIndex];
    const randomNmb1 = Math.floor(Math.random() * 99 + 1);
    const randomNmb2 = Math.floor(Math.random() * 9 + 1);

    expression = `${randomNmb1} ${randomOperator} ${randomNmb2}`;

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
    const pair = cons(expression, rightAnswer);
    pairs.push(pair);
  }
  getInteractive(rulesOfGame, pairs);
};
