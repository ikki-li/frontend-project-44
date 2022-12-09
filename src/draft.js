import {
  cons, car as expression, cdr as rightAnswer,
} from '@hexlet/pairs';

const pair = cons('Is even number?', 'yes');
console.log(expression(pair));
console.log(rightAnswer(pair));

// кусочек функции gcd

// eslint-disable-next-line import/prefer-default-export
export const getGCD = () => {
  const rulesOfGame = 'Find the greatest common divisor of given numbers.';
  let expression = '';
  let rightAnswer = '';
  const pairs = [];

  for (let i = 1; i < 4; i += 1) {
    const randomNmb1 = Math.floor(Math.random() * 99 + 2);
    const randomNmb2 = Math.floor(Math.random() * 99 + 2);

    expression = `${randomNmb1} ${randomNmb2}`;
    rightAnswer = String(gcd(randomNmb1, randomNmb2));
    pairs.push(cons(expression, rightAnswer));
  }
  getInteractive(rulesOfGame, pairs);
};
