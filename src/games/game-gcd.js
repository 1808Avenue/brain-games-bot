import getRandomNumberInRange, { lowerLimitInRange, upperLimitInRange } from '../helpers.js';

const getGcd = (x, y) => (y === 0 ? x : getGcd(y, x % y));

const preparingDataForGameGcd = () => {
  const firstRandomNumber = getRandomNumberInRange(lowerLimitInRange, upperLimitInRange);
  const secondRandomNumber = getRandomNumberInRange(lowerLimitInRange, upperLimitInRange);

  const question = `${firstRandomNumber}" "${secondRandomNumber}`;
  const correctAnswer = getGcd(firstRandomNumber, secondRandomNumber).toString();

  return [question, correctAnswer];
};

export default preparingDataForGameGcd;
