import {ANTLRInputStream, CommonTokenStream} from 'antlr4ts';
import {MariaDBLexer} from './generated/MariaDBLexer';
import {MariaDBParser} from './generated/MariaDBParser';
import {ANTLRASTNode, ResultASTNode, Logger, ParseError}
  from 'typings/PlSqlToAst';
import {createLexerErrorListener, createParserErrorListener}
  from './PlSqlToAstErrorListener';
import {ConsoleLogger} from './PlSqlLogger';

export class PlSqlToAst {
  private parser: MariaDBParser;
  private data: object;
  private logger: Logger;
  private showErrors: boolean = false;
  private errorStack: Array<ParseError> = [];

  constructor() {
    this.setLogger(ConsoleLogger);
  }

  private createTokenStream(satements: string): CommonTokenStream {
    const chars = new ANTLRInputStream(satements);
    const lexer: MariaDBLexer = new MariaDBLexer(chars);
    const errorListener =
      createLexerErrorListener(
          (type, _recognizer, offendingSymbol, line, charPosition, msg) => {
            const logMessage = {
              type,
              line,
              charPosition,
              msg,
            };
            this.errorStack.push(logMessage);
            if (this.showErrors) {
              this.logger.error(JSON.stringify(logMessage));
            }
          });
    if (errorListener !== null && errorListener !== undefined) {
      lexer.removeErrorListeners();
      lexer.addErrorListener(errorListener);
    }
    const tokenStream = new CommonTokenStream(lexer);

    return tokenStream;
  }

  setLogger(logger: Logger) {
    this.logger = logger;
    return this;
  }

  toggleErrors(showErrors: boolean): PlSqlToAst {
    this.showErrors = showErrors;
    return this;
  }

  createParser(statements: string): PlSqlToAst {
    const tokenStream: CommonTokenStream = this.createTokenStream(statements);
    const parser: MariaDBParser = new MariaDBParser(tokenStream);
    const errorListener =
      createParserErrorListener(
          (type, _recognizer, offendingSymbol, line, charPosition, msg) => {
            const logMessage = {
              type,
              line,
              charPosition,
              msg,
            };
            this.errorStack.push(logMessage);
            if (this.showErrors) {
              this.logger.error(JSON.stringify(logMessage));
            }
          });
    if (errorListener !== null && errorListener !== undefined) {
      parser.removeErrorListeners();
      parser.addErrorListener(errorListener);
    }
    this.parser = parser;
    return this;
  }

  parse(): PlSqlToAst {
    this.data = this.parser.sqlStatements();
    return this;
  }

  traverse(): PlSqlToAst {
    function traverse(tree: ANTLRASTNode): ANTLRASTNode {
      const result: ANTLRASTNode = {'context': tree.constructor.name};

      if (tree?.symbol?.text) {
        result['symbol'] = {'text': tree.symbol.text};
      }

      if (tree?.children?.length) {
        result['children'] = [];
        for (const child of tree.children) {
          result['children'].push(traverse(child));
        }
      }
      return result;
    }

    this.data = traverse(this.data);

    return this;
  }

  resume(): PlSqlToAst {
    function resume(tree: ANTLRASTNode, parent?: ANTLRASTNode): ResultASTNode {
      let result: ResultASTNode = {};
      if (tree?.children?.length > 1) {
        result['children'] = [];
        for (const child of tree.children) {
          result['children'].push(resume(child, tree));
        }
        result['context'] = tree.context;
      } else if (tree?.children?.length == 1) {
        result = resume(tree.children[0], tree);
        result['context'] = tree.context;
      } else if (tree?.symbol?.text) {
        result['symbol'] = tree.symbol.text;
        result['context'] = parent.context;
      }
      return result;
    }

    this.data = resume(this.data);

    return this;
  }

  flatten() {
    return this;
  }

  getResult() {
    const result = {
      data: this.errorStack.length ? {} : this.data,
      error: this.errorStack};
    return result;
  }
}
