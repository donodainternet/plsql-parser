import { Logger, ParseError } from 'typings/PlSqlToAst';
export declare class PlSqlToAst {
    private parser;
    private data;
    private logger;
    private showErrors;
    private errorStack;
    constructor();
    private createTokenStream;
    setLogger(logger: Logger): this;
    toggleErrors(showErrors: boolean): PlSqlToAst;
    createParser(statements: string): PlSqlToAst;
    parse(): PlSqlToAst;
    traverse(): PlSqlToAst;
    resume(): PlSqlToAst;
    flatten(): this;
    getResult(): {
        data: object;
        error: ParseError[];
    };
}
