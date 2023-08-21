import { Logger, ParseError } from './typings/PlSqlParser';
export declare class PlSqlParser {
    private parser;
    private data;
    private logger;
    private showErrors;
    private errorStack;
    constructor();
    private createTokenStream;
    setLogger(logger: Logger): this;
    toggleErrors(showErrors: boolean): PlSqlParser;
    createParser(statements: string): PlSqlParser;
    parse(): PlSqlParser;
    traverse(): PlSqlParser;
    resume(): PlSqlParser;
    flatten(): this;
    getResult(): {
        data: object;
        error: ParseError[];
    };
}
