import readlineSync from 'readline-sync';

// eslint-disable-next-line import/prefer-default-export
export const getInteractive = (rulesOfGame, expressions, rightAnswers) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rulesOfGame);

  for (let i = 0; i < expressions.length; i += 1) {
    const answer = readlineSync.question(`Question: ${expressions[i]} `);
    if (answer === rightAnswers[i]) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${rightAnswers[i]}".
Let's try again, ${userName}!`);
      return 'error';
    }
  }
  console.log(`Congratulations, ${userName}!`);
  return 'passed';
};
