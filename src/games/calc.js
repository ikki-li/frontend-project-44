import { cons } from '@hexlet/pairs';
import run from '../index.js';
import { getRandomIndex, getRandomNumber } from '../utils.js';

const operators = ['+', '*'];
const description = 'What is the result of the expression?';

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

const generateRound = () => {
  const randomIndex = getRandomIndex(operators);
  const operator = operators[randomIndex];
  const operand1 = getRandomNumber(1, 99);
  const operand2 = getRandomNumber(1, 9);

  const question = `${operand1} ${operator} ${operand2}`;

  const rightAnswer = String(getValue(operand1, operand2, operator));

  return cons(question, rightAnswer);
};

const runCalc = () => {
  run(description, generateRound);
};

export default runCalc;
