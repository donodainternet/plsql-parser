"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const PlSqlParser_1 = require("./PlSqlParser");
const yargs_1 = __importDefault(require("yargs"));
const path_1 = __importDefault(require("path"));
// import {consoleLogger} from './PlSqlLogger';
const args = yargs_1.default(process.argv.slice(2))
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
    .check((argv) => {
    const sqlFilePath = path_1.default.join(__dirname, argv['sql-file']);
    if (!fs_1.existsSync(sqlFilePath)) {
        throw new Error(`File not found: ${sqlFilePath}`);
    }
    return true;
})
    .help();
const sqlFilePath = path_1.default.join(__dirname, args.argv['sql-file']);
const statements = fs_1.readFileSync(sqlFilePath, 'utf-8');
let prettyAst = {};
const plsqlparser = new PlSqlParser_1.PlSqlParser();
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
//# sourceMappingURL=plsql-to-json-script.js.map