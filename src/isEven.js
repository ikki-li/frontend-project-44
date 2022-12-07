import readlineSync from 'readline-sync';

// eslint-disable-next-line import/prefer-default-export
export const numberIsEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 1; i < 4; i += 1) {
    const randomNumber = Math.ceil(Math.random() * 10);
    let rightAnswer;
    if (randomNumber % 2 === 0) {
      rightAnswer = 'yes';
    } else {
      rightAnswer = 'no';
    }
    const answer = readlineSync.question(`Question: ${randomNumber} `);
    if (rightAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${rightAnswer}".
Let's try again, ${userName}!`);
      return 'error';
    }
  }
  console.log(`Congratulations, ${userName}!`);
  return 'completed';
};
