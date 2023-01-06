import getRandomNumberInRange, { lowerLimitInRange, upperLimitInRange } from '../helpers.js';

const isEvenNumber = (number) => number % 2 === 0;

const preparingDataForGameEven = () => {
  const randomNumber = getRandomNumberInRange(lowerLimitInRange, upperLimitInRange);
  const question = randomNumber;

  const correctAnswer = isEvenNumber(randomNumber) ? 'да' : 'нет';

  return [question, correctAnswer];
};

export default preparingDataForGameEven;
