import { createInterface } from 'node:readline'
import { stdin as input, stdout as output } from 'node:process'
import os from 'os';

const readline = createInterface({ input, output });

export const read = async () => {
  return new Promise((resolve, reject) => {
    readline.once('line', resolve);
  });
}

export const print = async (string) => {
  return readline.write(`${string}${os.EOL}`);
}
