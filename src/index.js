import {
  Markup, Scenes, session, Telegraf,
} from 'telegraf';
import * as dotenv from 'dotenv';
import { commands } from './helpers.js';
import { calcRound1, calcRound2, calcRound3 } from './scenes/scene-calc.js';
import { gcdRound1, gcdRound2, gcdRound3 } from './scenes/scene-gcd.js';
import { progressRound1, progressRound2, progressRound3 } from './scenes/scene-progression.js';
import { primeRound1, primeRound2, primeRound3 } from './scenes/scene-prime.js';
import { evenRound1, evenRound2, evenRound3 } from './scenes/scene-even.js';

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);
const gameCalcScenes = new Scenes.Stage([calcRound1, calcRound2, calcRound3]);
const gameGcdScenes = new Scenes.Stage([gcdRound1, gcdRound2, gcdRound3]);
const gameProgressionScenes = new Scenes.Stage([progressRound1, progressRound2, progressRound3]);
const gamePrimeScenes = new Scenes.Stage([primeRound1, primeRound2, primeRound3]);
const gameEvenScenes = new Scenes.Stage([evenRound1, evenRound2, evenRound3]);

// Запуск бота - приветствие
bot.start(async (ctx) => {
  const userName = ctx.from.first_name;
  await ctx.reply(userName ? `Привет ${userName}` : 'Привет');
  // await ctx.reply(`Привет ${userName}`);
  await ctx.reply('Добро пожаловать в "Игры Разума"');
  await ctx.reply('Выберите игру:', Markup.inlineKeyboard(
    [
      [Markup.button.callback('"Калькулятор"', 'btn_calc'), Markup.button.callback('"НОД"', 'btn_gcd')],
      [Markup.button.callback('"Арифметическая прогрессия"', 'btn_progression'), Markup.button.callback('"Простое ли число?"', 'btn_prime')],
      [Markup.button.callback('"Проверка на чётность"', 'btn_even')],
    ],
  ));
});

// Команды
bot.command('games', async (ctx) => {
  await ctx.reply('Выберите игру:', Markup.inlineKeyboard(
    [
      [Markup.button.callback('"Калькулятор"', 'btn_calc'), Markup.button.callback('"НОД"', 'btn_gcd')],
      [Markup.button.callback('"Арифметическая прогрессия"', 'btn_progression'), Markup.button.callback('"Простое ли число?"', 'btn_prime')],
      [Markup.button.callback('"Проверка на чётность"', 'btn_even')],
    ],
  ));
});
bot.help((ctx) => ctx.reply(commands));

// Обработчики кнопок
// "Калькулятор"
bot.action('btn_calc', async (ctx) => {
  await ctx.reply(`Игра: "Калькулятор"\n\nПравила игры:\n
Пользователю показывается случайное математическое выражение, которое нужно вычислить и дать правильный ответ.
Для прохождения игры, пользователь должен дать правильный ответ на три вопроса подряд.
В случае, если пользователь даст неверный ответ, игра завершится.`, Markup.inlineKeyboard(
    [
      [Markup.button.callback('Играть', 'btn_start_calc')],
    ],
  ));
});
// "НОД"
bot.action('btn_gcd', async (ctx) => {
  await ctx.reply(`Игра: "НОД"\n\nПравила игры:\n
Пользователю показывается два случайных числа, необходимо вычислить наибольший общий делитель этих чисел и дать правильный ответ.
Для прохождения игры, пользователь должен дать правильный ответ на три вопроса подряд.
В случае, если пользователь даст неверный ответ, игра завершится.`, Markup.inlineKeyboard(
    [
      [Markup.button.callback('Играть', 'btn_start_gcd')],
    ],
  ));
});
// "Прогрессия"
bot.action('btn_progression', async (ctx) => {
  await ctx.reply(`Игра: "Арифметическая прогрессия"\n\nПравила игры:\n
Пользователю показывается случайный ряд чисел, образующий арифметическую прогрессию.
Игрок должен определить и записать недостающее число.
Для прохождения игры, пользователь должен дать правильный ответ на три вопроса подряд.
В случае, если пользователь даст неверный ответ, игра завершится.`, Markup.inlineKeyboard(
    [
      [Markup.button.callback('Играть', 'btn_start_progression')],
    ],
  ));
});
// "Простое ли число"
bot.action('btn_prime', async (ctx) => {
  await ctx.reply(`Игра: "Простое ли число?"\n\nПравила игры:\n
Пользователю показывается случайное число, необходимо ответить "да", если число простое, или "нет" в ином случае.
Для прохождения игры, пользователь должен дать правильный ответ на три вопроса подряд.
В случае, если пользователь даст неверный ответ, игра завершится.`, Markup.inlineKeyboard(
    [
      [Markup.button.callback('Играть', 'btn_start_prime')],
    ],
  ));
});
// "Проверка на четность
bot.action('btn_even', async (ctx) => {
  await ctx.reply(`Игра: "Проверка на чётность"\n\nПравила игры:\n
Пользователю показывается случайное число, необходимо ответить "да", если число чётное, или "нет" если нечётное.
Для прохождения игры, пользователь должен дать правильный ответ на три вопроса подряд.
В случае, если пользователь даст неверный ответ, игра завершится.`, Markup.inlineKeyboard(
    [
      [Markup.button.callback('Играть', 'btn_start_even')],
    ],
  ));
});

// ЗАПУСК СЦЕН
// Game calc
bot.use(session());
bot.use(gameCalcScenes.middleware());
bot.action('btn_start_calc', async (ctx) => {
  await ctx.scene.enter('calc-round1');
});

// Game gcd
bot.use(session());
bot.use(gameGcdScenes.middleware());
bot.action('btn_start_gcd', async (ctx) => {
  await ctx.scene.enter('gcd-round1');
});

// Game progression
bot.use(session());
bot.use(gameProgressionScenes.middleware());
bot.action('btn_start_progression', async (ctx) => {
  await ctx.scene.enter('progression-round1');
});

// Game prime
bot.use(session());
bot.use(gamePrimeScenes.middleware());
bot.action('btn_start_prime', async (ctx) => {
  await ctx.scene.enter('prime-round1');
});

// Game even
bot.use(session());
bot.use(gameEvenScenes.middleware());
bot.action('btn_start_even', async (ctx) => {
  await ctx.scene.enter('even-round1');
});

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
