import {PlSqlParser} from './PlSqlParser';

export function getASTAsCompleteJSON(statements: string) {
  const plsqlparser = new PlSqlParser();

  let result = {};

  try {
    result = plsqlparser
        .createParser(statements)
        .parse()
        .traverse()
        .flatten()
        .getResult();
  } catch (error) {
    console.error('An error occurred:', error);
  }

  return result;
}

export function getASTAsJSON(statements: string) {
  const plsqlparser = new PlSqlParser();

  let result = {};

  try {
    result = plsqlparser
        .createParser(statements)
        .parse()
        .traverse()
        .resume()
        .flatten()
        .getResult();
  } catch (error) {
    console.error('An error occurred:', error);
  }

  return result;
}
