import { Scenes } from 'telegraf';
import preparingDataForGameCalc from '../games/game-calc.js';

// ROUND 1
export const calcRound1 = new Scenes.BaseScene('calc-round1');
const [question1, answer1] = preparingDataForGameCalc();
calcRound1.enter(async (ctx) => {
  await ctx.reply('Каков результат выражения?');
  await ctx.reply(`${question1}`);
  await ctx.reply('Ваш ответ:');
});
calcRound1.on('text', async (ctx) => {
  if (ctx.message.text !== answer1) {
    await ctx.reply('Неправильный ответ.');
    await ctx.reply('Игра закончена!');
    await ctx.scene.leave();
  } else {
    await ctx.reply('Правильный ответ!');
    await ctx.scene.enter('calc-round2');
  }
});

// ROUND 2
export const calcRound2 = new Scenes.BaseScene('calc-round2');
const [question2, answer2] = preparingDataForGameCalc();
calcRound2.enter(async (ctx) => {
  await ctx.reply('Каков результат выражения?');
  await ctx.reply(`${question2}`);
  await ctx.reply('Ваш ответ:');
});
calcRound2.on('text', async (ctx) => {
  if (ctx.message.text !== answer2) {
    await ctx.reply('Неправильный ответ.');
    await ctx.reply('Игра закончена!');
    await ctx.scene.leave();
  } else {
    await ctx.reply('Правильный ответ!');
    await ctx.scene.enter('calc-round3');
  }
});

// ROUND 3
export const calcRound3 = new Scenes.BaseScene('calc-round3');
const [question3, answer3] = preparingDataForGameCalc();
calcRound3.enter(async (ctx) => {
  await ctx.reply('Каков результат выражения?');
  await ctx.reply(`${question3}`);
  await ctx.reply('Ваш ответ:');
});
calcRound3.on('text', async (ctx) => {
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
