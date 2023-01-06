import getRandomNumberInRange, { lowerLimitInRange, upperLimitInRange } from '../helpers.js';

const getPrimeNumber = (number) => {
  let divisionСounter = 0;

  for (let i = number; i > 0; i -= 1) {
    if (number % i === 0) {
      divisionСounter += 1;
    }
  }
  return divisionСounter === 2;
};

const preparingDataForGamePrime = () => {
  const randomNumber = getRandomNumberInRange(lowerLimitInRange, upperLimitInRange);
  const question = randomNumber;

  const correctAnswer = (getPrimeNumber(randomNumber)) ? 'да' : 'нет';

  return [question, correctAnswer];
};

export default preparingDataForGamePrime;
