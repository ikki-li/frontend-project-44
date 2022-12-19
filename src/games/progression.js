import { cons as generatePair } from '@hexlet/pairs';
import run from '../index.js';
import { getRandomIndex, getRandomNumber } from '../utils.js';

const description = 'What number is missing in the progression?';
const minLength = 5;
const maxLength = 10;
const minStep = 2;
const maxStep = 10;
const minStart = 1;
const maxStart = 20;

const createProgression = (start, step, length) => {
  const progression = [];
  let number = start;
  for (let i = 0; i < length; i += 1) {
    progression[i] = number;
    number += step;
  }
  return progression;
};

const generateRound = () => {
  const length = getRandomNumber(minLength, maxLength);
  const step = getRandomNumber(minStep, maxStep);
  const start = getRandomNumber(minStart, maxStart);
  const progression = createProgression(start, step, length);
  const index = getRandomIndex(progression);
  const rightAnswer = String(progression[index]);
  progression[index] = '..';
  const separator = ' ';
  const question = progression.join(separator);
  return generatePair(question, rightAnswer);
};

const runProgression = () => {
  run(description, generateRound);
};

export default runProgression;
