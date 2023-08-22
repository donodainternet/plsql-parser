import {ANTLRErrorListener, RecognitionException, Recognizer} from 'antlr4ts';
import {LexerATNSimulator} from 'antlr4ts/atn/LexerATNSimulator';
import {ParserATNSimulator} from 'antlr4ts/atn/ParserATNSimulator';

export type QueryParseError = {
  e?: RecognitionException | undefined;
  msg?: string;
};

export type ErrorListener = ANTLRErrorListener<number>;

export function createLexerErrorListener(onError): ErrorListener {
  const errorListener = {
    syntaxError: (
        _recognizer: Recognizer<number, LexerATNSimulator>,
        offendingSymbol: number | undefined,
        line: number,
        charPositionInLine: number,
        msg: string,
    ) => {
      onError(
          'lexerError',
          _recognizer,
          offendingSymbol,
          line,
          charPositionInLine,
          msg);
    },
  };
  return errorListener;
}

export function createParserErrorListener(onError): ErrorListener {
  const errorListener = {
    syntaxError: (
        _recognizer: Recognizer<number, ParserATNSimulator>,
        offendingSymbol: number | undefined,
        line: number,
        charPositionInLine: number,
        msg: string,
    ) => {
      onError(
          'parserError',
          _recognizer,
          offendingSymbol,
          line,
          charPositionInLine,
          msg);
    },
  };
  return errorListener;
}
