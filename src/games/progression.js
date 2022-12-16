import { cons } from '@hexlet/pairs';
import run from '../index.js';
import { getRandomIndex, getRandomNumber } from '../utils.js';

const description = 'What number is missing in the progression?';

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
  const progressionLength = getRandomNumber(5, 10);
  const firstTerm = getRandomNumber(1, 20);
  const step = getRandomNumber(2, 10);

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
