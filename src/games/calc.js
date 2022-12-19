import { cons as generatePair } from '@hexlet/pairs';
import run from '../index.js';
import { getRandomIndex, getRandomNumber } from '../utils.js';

const operators = ['+', '-', '*'];
const description = 'What is the result of the expression?';
const minOperand = 1;
const maxOperand = 99;

const calculate = (x, y, operator) => {
  switch (operator) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default:
      throw new Error(`Unknown operator '${operator}'!`);
  }
};

const generateRound = () => {
  const index = getRandomIndex(operators);
  const operator = operators[index];
  const operand1 = getRandomNumber(minOperand, maxOperand);
  const operand2 = getRandomNumber(minOperand, maxOperand);
  const question = `${operand1} ${operator} ${operand2}`;
  const rightAnswer = String(calculate(operand1, operand2, operator));
  return generatePair(question, rightAnswer);
};

const runCalc = () => {
  run(description, generateRound);
};

export default runCalc;
