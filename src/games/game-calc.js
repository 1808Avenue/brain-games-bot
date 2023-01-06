import getRandomNumberInRange, { lowerLimitInRange, upperLimitInRange } from '../helpers.js';

const getCorrectAnswer = (firstOperand, operator, secondOperand) => {
  switch (operator) {
    case '+':
      return (firstOperand + secondOperand);
    case '-':
      return (firstOperand - secondOperand);
    case '*':
      return (firstOperand * secondOperand);
    default:
      throw new Error(`Unknown state: '${operator}'!`);
  }
};

const preparingDataForGameCalc = () => {
  const firstRandomNumber = getRandomNumberInRange(lowerLimitInRange, upperLimitInRange);
  const secondRandomNumber = getRandomNumberInRange(lowerLimitInRange, upperLimitInRange);

  const operators = ['+', '-', '*'];
  const lowerLimitIndex = 0;
  const upperLimitIndex = operators.length - 1;
  const randomOperator = operators[getRandomNumberInRange(lowerLimitIndex, upperLimitIndex)];

  const question = `${firstRandomNumber} ${randomOperator} ${secondRandomNumber}`;
  const correctAnswer = getCorrectAnswer(firstRandomNumber, randomOperator, secondRandomNumber);

  return [question, correctAnswer.toString()];
};
export default preparingDataForGameCalc;
