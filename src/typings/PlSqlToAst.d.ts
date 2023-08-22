export interface ANTLRASTNode {
    context?: string;
    contextTree?: string[];
    children?: any[];
    symbol?: {text?: string};
}

export interface ResultASTNode {
    context?: string;
    contextTree?: string[];
    symbol?: string;
    children?: ResultASTNode[];
}

export type Logger = {
    debug(message: string, context?: unknown): void;
    info(message: string, context?: unknown): void;
    warn(message: string, context?: unknown): void;
    error(message: string, context?: unknown): void;
}
  
export interface CliOptions {
    'sql-file': string;
    'show-errors': boolean;
}

export interface ParseError {
    'type': 'parserError' | 'lexerError';
    'line': number;
    'charPosition': number;
    'msg': string;
}