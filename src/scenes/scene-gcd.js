import { Scenes } from 'telegraf';
import preparingDataForGameGcd from '../games/game-gcd.js';

// ROUND 1
export const gcdRound1 = new Scenes.BaseScene('gcd-round1');
const [question1, answer1] = preparingDataForGameGcd();
gcdRound1.enter(async (ctx) => {
  await ctx.reply(`Найдите наибольший общий делитель двух чисел: "${question1}"`);
  await ctx.reply('Ваш ответ:');
});
gcdRound1.on('text', async (ctx) => {
  if (ctx.message.text !== answer1) {
    await ctx.reply('Неправильный ответ.');
    await ctx.reply('Игра закончена!');
    await ctx.scene.leave();
  } else {
    await ctx.reply('Правильный ответ!');
    await ctx.scene.enter('gcd-round2');
  }
});

// ROUND 2
export const gcdRound2 = new Scenes.BaseScene('gcd-round2');
const [question2, answer2] = preparingDataForGameGcd();
gcdRound2.enter(async (ctx) => {
  await ctx.reply(`Найдите наибольший общий делитель двух чисел: ${question2}`);
  await ctx.reply('Ваш ответ:');
});
gcdRound2.on('text', async (ctx) => {
  if (ctx.message.text !== answer2) {
    await ctx.reply('Неправильный ответ.');
    await ctx.reply('Игра закончена!');
    await ctx.scene.leave();
  } else {
    await ctx.reply('Правильный ответ!');
    await ctx.scene.enter('gcd-round3');
  }
});

// ROUND 3
export const gcdRound3 = new Scenes.BaseScene('gcd-round3');
const [question3, answer3] = preparingDataForGameGcd();
gcdRound3.enter(async (ctx) => {
  await ctx.reply(`Найдите наибольший общий делитель двух чисел: ${question3}`);
  await ctx.reply('Ваш ответ:');
});
gcdRound3.on('text', async (ctx) => {
  if (ctx.message.text !== answer3) {
    await ctx.reply('Неправильный ответ.');
    await ctx.reply('Игра закончена!');
    await ctx.scene.leave();
  } else {
    await ctx.reply('Правильный ответ!');
    await ctx.reply('Поздравляю вы победили!');
    await ctx.reply('🏆');
    await ctx.scene.leave();
  }
});
