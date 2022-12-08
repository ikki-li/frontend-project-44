import { getInteractive } from '../index.js';

// eslint-disable-next-line import/prefer-default-export
export const calculated = () => {
  const rulesOfGame = 'What is the result of the expression?';
  const operators = ['+', '*'];
  const expressions = [];
  const rightAnswers = [];

  for (let i = 1; i < 4; i += 1) {
    const randomIndex = Math.floor(Math.random() * operators.length);
    const randomOperator = operators[randomIndex];
    const randomNmb1 = Math.floor(Math.random() * 99 + 1);
    const randomNmb2 = Math.floor(Math.random() * 9 + 1);

    expressions.push(`${randomNmb1} ${randomOperator} ${randomNmb2}`);

    switch (randomOperator) {
      case '+':
        rightAnswers.push(String(randomNmb1 + randomNmb2));
        break;
      case '*':
        rightAnswers.push(String(randomNmb1 * randomNmb2));
        break;
      default:
        rightAnswers.push(null);
    }
  }
  getInteractive(rulesOfGame, expressions, rightAnswers);
};
