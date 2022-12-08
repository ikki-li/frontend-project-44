import { getInteractive } from '../index.js';

const gcd = (x, y) => {
  if (y > x) {
    return gcd(y, x);
  }
  if (!y) {
    return x;
  }
  return gcd(y, x % y);
};

// eslint-disable-next-line import/prefer-default-export
export const getGCD = () => {
  const rulesOfGame = 'Find the greatest common divisor of given numbers.';
  const expressions = [];
  const rightAnswers = [];

  for (let i = 1; i < 4; i += 1) {
    const randomNmb1 = Math.floor(Math.random() * 99 + 2);
    const randomNmb2 = Math.floor(Math.random() * 99 + 2);

    expressions.push(`${randomNmb1} ${randomNmb2}`);

    const rightAnswer = gcd(randomNmb1, randomNmb2);
    rightAnswers.push(String(rightAnswer));
  }
  getInteractive(rulesOfGame, expressions, rightAnswers);
};
