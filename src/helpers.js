export const commands = `
/start - Запуск
/games - Список игр
/help - Помощь
`;

export const lowerLimitInRange = 1;
export const upperLimitInRange = 25;

const getRandomNumberInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export default getRandomNumberInRange;
