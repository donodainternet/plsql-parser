import path from 'path';
import {readFileSync} from 'fs';
import {PlSqlToAst} from '../src/PlSqlToAst';
import {ParseError} from '../src/typings/PlSqlToAst';

describe('PlSqlToAst', () => {
  const exampleFiles = [
    'example-1.sql',
    'example-2.sql',
    'example-3.sql',
    'example-4.sql',
    'example-5.sql',
    'example-6.sql',
    'example-7.sql',
  ];

  exampleFiles.forEach((exampleFile) => {
    it('should decode example queries', () => {
      const filePath =
            path.join(__dirname, '..', 'plsql-examples', exampleFile);
      const statements = readFileSync(filePath, 'utf8');

      const plsqltoast = new PlSqlToAst();

      const result = plsqltoast
          .toggleErrors(false)
          .createParser(statements)
          .parse()
          .traverse()
          .resume()
          .flatten()
          .getResult();

      expect(result).toHaveProperty('data');
      expect(result).toHaveProperty('error');
      expect(result.error).toEqual([]);
      expect(result.data).toHaveProperty('context');
      expect(result.data).toHaveProperty('children');
    });
  });

  it('should handle errors', () => {
    const plsqltoast = new PlSqlToAst();
    const statements = 'INVALID SQL';

    const result = plsqltoast
        .toggleErrors(false)
        .createParser(statements)
        .parse()
        .traverse()
        .resume()
        .flatten()
        .getResult();

    expect(result).toHaveProperty('data');
    expect(result).toHaveProperty('error');
    expect(result.data).toEqual({});
    expect(result.error).toBeInstanceOf(Array);
    expect(result.error.length).toBeGreaterThan(0);

    result.error.forEach((value: ParseError) => {
      expect(value).toHaveProperty('type');
      expect(['parserError', 'lexerError']).toContain(value.type);
      expect(value).toHaveProperty('line');
      expect(value).toHaveProperty('charPosition');
      expect(value).toHaveProperty('msg');
    });
  });
});
