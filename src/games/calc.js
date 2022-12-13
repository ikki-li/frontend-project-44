import { cons } from '@hexlet/pairs';
import run from '../index.js';
import { getRandIndex, getRandNmb } from '../utils.js';

const getValue = (x, y, operator) => {
  switch (operator) {
    case '+':
      return x + y;
    case '*':
      return x * y;
    default:
      return null;
  }
};

const getQA = () => {
  const operators = ['+', '*'];
  const randIndex = getRandIndex(operators);
  const operator = operators[randIndex];
  const operand1 = getRandNmb(1, 99);
  const operand2 = getRandNmb(1, 9);

  const expression = `${operand1} ${operator} ${operand2}`;

  const rightAnswer = String(getValue(operand1, operand2, operator));

  return cons(expression, rightAnswer);
};

const runCalc = () => {
  const rulesOfGame = 'What is the result of the expression?';
  run(rulesOfGame, getQA);
};

export default runCalc;
