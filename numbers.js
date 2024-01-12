#!/usr/bin/env node

import { print, read } from "./utils/console.js";

const playRound = async (answer) => {
  const number = Number(await read(''));

  if (number === answer) {
    print(`Отгадано число ${answer}`);
    return { isEnd: true };
  }

  if (number < answer) {
    print('Больше');
  } else {
    print('Меньше');
  }

  return { isEnd: false };
}

const generateNumber = (min, max) => Math.round(Math.random() * max) + min

const MIN_NUMBER = 0;
const MAX_NUMBER = 100;

const startGame = async () => {
  const number = generateNumber(MIN_NUMBER, MAX_NUMBER);

  print(`Загадано число от ${MIN_NUMBER} до ${MAX_NUMBER}`)

  while (true) {
    const result = await playRound(number);
    if (result.isEnd) break;
  }

  process.exit();
}

startGame();
