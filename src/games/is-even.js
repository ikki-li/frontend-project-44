import { getInteractive } from '../index.js';

// eslint-disable-next-line import/prefer-default-export
export const numberIsEven = () => {
  const rulesOfGame = 'Answer "yes" if the number is even, otherwise answer "no"';
  const expressions = [];
  const rightAnswers = [];
  for (let i = 1; i < 4; i += 1) {
    const randomNumber = Math.ceil(Math.random() * 10);
    expressions.push(String(randomNumber));

    if (randomNumber % 2 === 0) {
      rightAnswers.push('yes');
    } else {
      rightAnswers.push('no');
    }
  }
  getInteractive(rulesOfGame, expressions, rightAnswers);
};
