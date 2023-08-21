import {existsSync, readFileSync} from 'fs';
import {PlSqlParser} from './PlSqlParser';
import yargs from 'yargs';
import {CliOptions} from 'typings/PlSqlParser';
import path from 'path';
// import {consoleLogger} from './PlSqlLogger';

const args = yargs(process.argv.slice(2))
    .option('sql-file', {
      alias: 'f',
      demandOption: true,
      describe: 'Provide a pl/sql file to generate abstraction',
    })
    .option('show-errors', {
      alias: 'e',
      describe: 'Display errors in the console',
      boolean: true,
      default: false,
    })
    .check((argv: yargs.Arguments<CliOptions>) => {
      const sqlFilePath = path.join(__dirname, argv['sql-file']);
      if (!existsSync(sqlFilePath)) {
        throw new Error(`File not found: ${sqlFilePath}`);
      }
      return true;
    })
    .help();

const sqlFilePath = path.join(__dirname, args.argv['sql-file']);
const statements = readFileSync(sqlFilePath, 'utf-8');

let prettyAst = {};
const plsqlparser = new PlSqlParser();
prettyAst = plsqlparser
    // .setLogger(ConsoleLogger)
    .toggleErrors(args.argv['show-errors'])
    .createParser(statements)
    .parse()
    .traverse()
    .resume()
    .flatten()
    .getResult();
const jsonString = JSON.stringify(prettyAst, null, 2);
console.log(jsonString);
