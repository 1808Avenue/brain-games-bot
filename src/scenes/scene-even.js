import { Scenes } from 'telegraf';
import preparingDataForGameEven from '../games/game-even.js';

// ROUND 1
export const evenRound1 = new Scenes.BaseScene('even-round1');
const [question1, answer1] = preparingDataForGameEven();
evenRound1.enter(async (ctx) => {
  await ctx.reply('Ответьте "да", если число чётное, или "нет" в ином случае.');
  await ctx.reply(`${question1}`);
  await ctx.reply('Ваш ответ:');
});
evenRound1.on('text', async (ctx) => {
  if (ctx.message.text.toLowerCase() !== answer1) {
    await ctx.reply('Неправильный ответ.');
    await ctx.reply('Игра закончена!');
    await ctx.scene.leave();
  } else {
    await ctx.reply('Правильный ответ!');
    await ctx.scene.enter('even-round2');
  }
});

// ROUND 2
export const evenRound2 = new Scenes.BaseScene('even-round2');
const [question2, answer2] = preparingDataForGameEven();
evenRound2.enter(async (ctx) => {
  await ctx.reply('Ответьте "да", если число чётное, или "нет" в ином случае.');
  await ctx.reply(`${question2}`);
  await ctx.reply('Ваш ответ:');
});
evenRound2.on('text', async (ctx) => {
  if (ctx.message.text.toLowerCase() !== answer2) {
    await ctx.reply('Неправильный ответ.');
    await ctx.reply('Игра закончена!');
    await ctx.scene.leave();
  } else {
    await ctx.reply('Правильный ответ!');
    await ctx.scene.enter('even-round3');
  }
});

// ROUND 3
export const evenRound3 = new Scenes.BaseScene('even-round3');
const [question3, answer3] = preparingDataForGameEven();
evenRound3.enter(async (ctx) => {
  await ctx.reply('Ответьте "да", если число чётное, или "нет" в ином случае.');
  await ctx.reply(`${question3}`);
  await ctx.reply('Ваш ответ:');
});
evenRound3.on('text', async (ctx) => {
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
