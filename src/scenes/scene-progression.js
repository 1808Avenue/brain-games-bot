import { Scenes } from 'telegraf';
import preparingDataForGameProgression from '../games/game-progression.js';

// ROUND 1
export const progressRound1 = new Scenes.BaseScene('progression-round1');
const [question1, answer1] = preparingDataForGameProgression();
progressRound1.enter(async (ctx) => {
  await ctx.reply('Какое число в арифметической прогрессии пропущено?');
  await ctx.reply(`${question1}`);
  await ctx.reply('Ваш ответ:');
});
progressRound1.on('text', async (ctx) => {
  if (ctx.message.text !== answer1) {
    await ctx.reply('Неправильный ответ.');
    await ctx.reply('Игра закончена!');
    await ctx.scene.leave();
  } else {
    await ctx.reply('Правильный ответ!');
    await ctx.scene.enter('progression-round2');
  }
});

// ROUND 2
export const progressRound2 = new Scenes.BaseScene('progression-round2');
const [question2, answer2] = preparingDataForGameProgression();
progressRound2.enter(async (ctx) => {
  await ctx.reply('Какое число в арифметической прогрессии пропущено?');
  await ctx.reply(`${question2}`);
  await ctx.reply('Ваш ответ:');
});
progressRound2.on('text', async (ctx) => {
  if (ctx.message.text !== answer2) {
    await ctx.reply('Неправильный ответ.');
    await ctx.reply('Игра закончена!');
    await ctx.scene.leave();
  } else {
    await ctx.reply('Правильный ответ!');
    await ctx.scene.enter('progression-round3');
  }
});

// ROUND 3
export const progressRound3 = new Scenes.BaseScene('progression-round3');
const [question3, answer3] = preparingDataForGameProgression();
progressRound3.enter(async (ctx) => {
  await ctx.reply('Какое число в арифметической прогрессии пропущено?');
  await ctx.reply(`${question3}`);
  await ctx.reply('Ваш ответ:');
});
progressRound3.on('text', async (ctx) => {
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
