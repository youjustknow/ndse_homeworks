#!/usr/bin/env node

import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import currentComandHandler from './commands/current.js'
import addComandHandler from './commands/add.js'
import subComandHandler from './commands/sub.js'

yargs(hideBin(process.argv))
  .command('current', 'Display current datetime in UTC format', (yargs) => {
    yargs
      .option('year', {
        alias: 'y',
        boolean: true,
        description: 'Display year',
      })
      .option('month', {
        alias: 'm',
        boolean: true,
        description: 'Display month',
      })
      .option('date', {
        alias: 'd',
        boolean: true,
        description: 'Display date'
      })
  }, currentComandHandler)
  .command('add', 'Adds days to current datetime and displays it', (yargs) => {
    yargs
      .option('years', {
        alias: 'y',
        number: true,
        description: 'Add years',
      })
      .option('months', {
        alias: 'm',
        number: true,
        description: 'Add months',
      })
      .option('days', {
        alias: 'd',
        number: true,
        description: 'Add days'
      })
  }, addComandHandler)
  .command('sub', 'Subtitutes days to current datetime and displays it', (yargs) => {
    yargs
      .option('years', {
        alias: 'y',
        number: true,
        description: 'Subtitute years',
      })
      .option('months', {
        alias: 'm',
        number: true,
        description: 'Subtitute months',
      })
      .option('days', {
        alias: 'd',
        number: true,
        description: 'Subtitute days'
      })
  }, subComandHandler)
  .parse()
