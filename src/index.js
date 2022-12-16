import readlineSync from 'readline-sync';
import { car as getQuestion, cdr as getRightAnswer } from '@hexlet/pairs';

const roundsCount = 3;

const run = (description, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);

  for (let i = 0; i < roundsCount; i += 1) {
    const pair = generateRound();
    const question = getQuestion(pair);
    const rightAnswer = getRightAnswer(pair);
    const userAnswer = readlineSync.question(`Question: ${question} `);
    if (userAnswer !== rightAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default run;
