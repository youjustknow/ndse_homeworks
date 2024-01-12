import yargs from 'yargs'
import currentComandHandler from './commands/current.js'

yargs(process.argv.slice(2))
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
  .parse()
