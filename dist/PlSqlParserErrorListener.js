"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createParserErrorListener = exports.createLexerErrorListener = void 0;
function createLexerErrorListener(onError) {
    const errorListener = {
        syntaxError: (_recognizer, offendingSymbol, line, charPositionInLine, msg) => {
            onError('lexerError', _recognizer, offendingSymbol, line, charPositionInLine, msg);
        },
    };
    return errorListener;
}
exports.createLexerErrorListener = createLexerErrorListener;
function createParserErrorListener(onError) {
    const errorListener = {
        syntaxError: (_recognizer, offendingSymbol, line, charPositionInLine, msg) => {
            onError('parserError', _recognizer, offendingSymbol, line, charPositionInLine, msg);
        },
    };
    return errorListener;
}
exports.createParserErrorListener = createParserErrorListener;
//# sourceMappingURL=PlSqlParserErrorListener.js.map