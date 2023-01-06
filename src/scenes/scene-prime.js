import { Scenes } from 'telegraf';
import preparingDataForGamePrime from '../games/game-prime.js';

// ROUND 1
export const primeRound1 = new Scenes.BaseScene('prime-round1');
const [question1, answer1] = preparingDataForGamePrime();
primeRound1.enter(async (ctx) => {
  await ctx.reply('Ответьте "да", если число простое, или "нет" в ином случае.');
  await ctx.reply(`${question1}`);
  await ctx.reply('Ваш ответ:');
});
primeRound1.on('text', async (ctx) => {
  if (ctx.message.text.toLowerCase() !== answer1) {
    await ctx.reply('Неправильный ответ.');
    await ctx.reply('Игра закончена!');
    await ctx.scene.leave();
  } else {
    await ctx.reply('Правильный ответ!');
    await ctx.scene.enter('prime-round2');
  }
});

// ROUND 2
export const primeRound2 = new Scenes.BaseScene('prime-round2');
const [question2, answer2] = preparingDataForGamePrime();
primeRound2.enter(async (ctx) => {
  await ctx.reply('Ответьте "да", если число простое, или "нет" в ином случае.');
  await ctx.reply(`${question2}`);
  await ctx.reply('Ваш ответ:');
});
primeRound2.on('text', async (ctx) => {
  if (ctx.message.text.toLowerCase() !== answer2) {
    await ctx.reply('Неправильный ответ.');
    await ctx.reply('Игра закончена!');
    await ctx.scene.leave();
  } else {
    await ctx.reply('Правильный ответ!');
    await ctx.scene.enter('prime-round3');
  }
});

// ROUND 3
export const primeRound3 = new Scenes.BaseScene('prime-round3');
const [question3, answer3] = preparingDataForGamePrime();
primeRound3.enter(async (ctx) => {
  await ctx.reply('Ответьте "да", если число простое, или "нет" в ином случае.');
  await ctx.reply(`${question3}`);
  await ctx.reply('Ваш ответ:');
});
primeRound3.on('text', async (ctx) => {
  if (ctx.message.text.toLowerCase() !== answer3) {
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
