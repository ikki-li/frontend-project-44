import { cons } from '@hexlet/pairs';
import run from '../index.js';
import { getRandomIndex, getRandomNumber } from '../utils.js';

const description = 'What number is missing in the progression?';

// избавилась от магических чисел
const minLength = 5;
const maxLength = 10;
const minNumber = 1;
const maxNumber = 10;

const createProgression = (progressionLength, firstTerm, step) => {
  const progression = [];
  let term = firstTerm;
  for (let i = 0; i < progressionLength; i += 1) {
    progression[i] = term;
    term += step;
  }
  return progression;
};

const generateRound = () => {
  const progressionLength = getRandomNumber(minLength, maxLength);
  const firstTerm = getRandomNumber(minNumber, maxNumber);
  const step = getRandomNumber(minNumber, maxNumber);

  const progression = createProgression(progressionLength, firstTerm, step);

  const randomIndex = getRandomIndex(progression);
  const rightAnswer = String(progression[randomIndex]);
  progression[randomIndex] = '..';

  const separator = ' ';
  const question = progression.join(separator);

  return cons(question, rightAnswer);
};

const runProgression = () => {
  run(description, generateRound);
};

export default runProgression;
