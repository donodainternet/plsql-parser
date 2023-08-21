"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlSqlParser = void 0;
const antlr4ts_1 = require("antlr4ts");
const MariaDBLexer_1 = require("./generated/MariaDBLexer");
const MariaDBParser_1 = require("./generated/MariaDBParser");
const PlSqlParserErrorListener_1 = require("./PlSqlParserErrorListener");
const PlSqlLogger_1 = require("./PlSqlLogger");
class PlSqlParser {
    constructor() {
        this.showErrors = false;
        this.errorStack = [];
        this.setLogger(PlSqlLogger_1.ConsoleLogger);
    }
    createTokenStream(satements) {
        const chars = new antlr4ts_1.ANTLRInputStream(satements);
        const lexer = new MariaDBLexer_1.MariaDBLexer(chars);
        const errorListener = PlSqlParserErrorListener_1.createLexerErrorListener((type, _recognizer, offendingSymbol, line, charPosition, msg) => {
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
        const tokenStream = new antlr4ts_1.CommonTokenStream(lexer);
        return tokenStream;
    }
    setLogger(logger) {
        this.logger = logger;
        return this;
    }
    toggleErrors(showErrors) {
        this.showErrors = showErrors;
        return this;
    }
    createParser(statements) {
        const tokenStream = this.createTokenStream(statements);
        const parser = new MariaDBParser_1.MariaDBParser(tokenStream);
        const errorListener = PlSqlParserErrorListener_1.createParserErrorListener((type, _recognizer, offendingSymbol, line, charPosition, msg) => {
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
    parse() {
        this.data = this.parser.sqlStatements();
        return this;
    }
    traverse() {
        function traverse(tree) {
            var _a, _b;
            const result = { 'context': tree.constructor.name };
            if ((_a = tree === null || tree === void 0 ? void 0 : tree.symbol) === null || _a === void 0 ? void 0 : _a.text) {
                result['symbol'] = { 'text': tree.symbol.text };
            }
            if ((_b = tree === null || tree === void 0 ? void 0 : tree.children) === null || _b === void 0 ? void 0 : _b.length) {
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
    resume() {
        function resume(tree, parent) {
            var _a, _b, _c;
            let result = {};
            if (((_a = tree === null || tree === void 0 ? void 0 : tree.children) === null || _a === void 0 ? void 0 : _a.length) > 1) {
                result['children'] = [];
                for (const child of tree.children) {
                    result['children'].push(resume(child, tree));
                }
                result['context'] = tree.context;
            }
            else if (((_b = tree === null || tree === void 0 ? void 0 : tree.children) === null || _b === void 0 ? void 0 : _b.length) == 1) {
                result = resume(tree.children[0], tree);
                result['context'] = tree.context;
            }
            else if ((_c = tree === null || tree === void 0 ? void 0 : tree.symbol) === null || _c === void 0 ? void 0 : _c.text) {
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
            error: this.errorStack
        };
        return result;
    }
}
exports.PlSqlParser = PlSqlParser;
//# sourceMappingURL=PlSqlParser.js.map