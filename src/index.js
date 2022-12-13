import readlineSync from 'readline-sync';
import { car as expression, cdr as rightAnswer } from '@hexlet/pairs';

const run = (rulesOfGame, getQA) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rulesOfGame);

  for (let i = 1; i < 4; i += 1) {
    const pair = getQA();
    const answer = readlineSync.question(`Question: ${expression(pair)} `);
    if (answer === rightAnswer(pair)) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${rightAnswer(pair)}". Let's try again, ${userName}!`);
      return 'error';
    }
  }
  console.log(`Congratulations, ${userName}!`);
  return 'passed';
};

export default run;
