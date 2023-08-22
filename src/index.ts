import {PlSqlToAst} from './PlSqlToAst';

export function getASTAsCompleteJSON(statements: string) {
  const plsqltoast = new PlSqlToAst();

  let result = {};

  try {
    result = plsqltoast
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
  const plsqltoast = new PlSqlToAst();

  let result = {};

  try {
    result = plsqltoast
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
