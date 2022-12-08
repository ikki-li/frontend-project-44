import { getInteractive } from './index.js';

// eslint-disable-next-line import/prefer-default-export
export const  = () => {
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






import readlineSync from "readline-sync";

// eslint-disable-next-line import/prefer-default-export
export const getValueOfExpression = () => {
  console.log("Welcome to the Brain Games!");
  const userName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${userName}!`);
  console.log("What is the result of the expression?");

  const operators = ["+", "*"];

  for (let i = 1; i < 4; i += 1) {
    const randomIndex = Math.floor(Math.random() * operators.length);
    const randomOperator = operators[randomIndex];
    const randomNmb1 = Math.floor(Math.random() * 99 + 1);
    const randomNmb2 = Math.floor(Math.random() * 9 + 1);

    let rightAnswer;

    const answer = readlineSync.question(
      `Question: ${randomNmb1} ${randomOperator} ${randomNmb2} `
    );

    switch (randomOperator) {
      case "+":
        rightAnswer = String(randomNmb1 + randomNmb2);
        break;
      case "*":
        rightAnswer = String(randomNmb1 * randomNmb2);
        break;
      default:
        rightAnswer = null;
    }

    if (answer === rightAnswer) {
      console.log("Correct!");
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${rightAnswer}".
Let's try again, ${userName}!`);
      return "error";
    }
  }
  console.log(`Congratulations, ${userName}!`);
  return "completed";
};

