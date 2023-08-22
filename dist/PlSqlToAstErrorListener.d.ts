import { ANTLRErrorListener, RecognitionException } from 'antlr4ts';
export declare type QueryParseError = {
    e?: RecognitionException | undefined;
    msg?: string;
};
export declare type ErrorListener = ANTLRErrorListener<number>;
export declare function createLexerErrorListener(onError: any): ErrorListener;
export declare function createParserErrorListener(onError: any): ErrorListener;
