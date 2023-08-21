# PlSql-Parser: Parse PL/SQL Code to JSON

PlSql-Parser is a powerful tool for parsing complex PL/SQL code and extracting its Abstract Syntax Tree (AST) into a structured JSON format. It's designed to handle various PL/SQL code constructs, including stored procedures, triggers, and functions, making it a versatile solution for analyzing and manipulating PL/SQL codebases.

## Features

- Parse PL/SQL code and generate structured JSON representation of the AST.
- Handle complex PL/SQL constructs like loops, conditionals, function calls, and more.
- Option to display errors in the console.
- Easily integrated into projects through npm installation or command-line usage.

## Installation

To install the PlSql-Parser module via npm, use the following command:

```bash
npm install plsql-parser
```

## Command-Line Usage

PlSql-Parser can be used via the command line to generate JSON output for a provided PL/SQL file. The following options are available:
```bash
# Provide a PL/SQL file to generate abstraction (required)
node dist/plsql-to-json-script.js --sql-file=path/to/your/plsql/file.sql
```
Options:
```bash
-f, --sql-file: Provide a PL/SQL file to generate abstraction (required).
-e, --show-errors: Display errors in the console (boolean, default: false).
--help: Display help information.
```

## Module Usage

You can also use PlSql-Parser as a module in your TypeScript project:
```javascript
import { getASTAsJSON } from "plsql-parser";

const query = 'SELECT * FROM \`employees\`;';
const jsonOutput = getASTAsJSON(query);
```

## Examples
<div style="display: flex;">
  <div style="flex: 50%; overflow: auto; padding: 10px; border: 1px solid #ccc;">
    <pre>
CREATE PROCEDURE `complex_procedure`()
BEGIN
    DECLARE `var1` INT;
    DECLARE `var2` INT;
    DECLARE `total_records` INT;
    DECLARE `avg_value` FLOAT;
    
    SET `var1` = 0;
    SET `var2` = 0;
    
    WHILE `var1` < 10 DO
        SET `var2` = 0;
        WHILE `var2` < 5 DO
            INSERT INTO `example_table` (`column1`, `column2`)
            VALUES (`var1`, `var2`);
            
            SET `var2` = `var2` + 1;
        END WHILE;
        
        SET `var1` = `var1` + 1;
    END WHILE;
    
    SET `total_records` = `get_total_records`();
    
    SET `avg_value` = `calculate_average_value`(`example_table`.`column2`);
    
    INSERT INTO `summary_table` (`total_records`, `avg_value`)
    VALUES (`total_records`, `avg_value`);
    
    SELECT * FROM `summary_table`;
END
    </pre>
  </div>
  <div style="flex: 50%; overflow: auto; padding: 10px; border: 1px solid #ccc;">
    <pre>
{
  "data": {
    "children": [
      {
        "symbol": "CREATE",
        "context": "CreateProcedureContext"
      },
      {
        "symbol": "PROCEDURE",
        "context": "CreateProcedureContext"
      },
      {
        "symbol": "`complex_procedure`",
        "context": "FullIdContext"
      },
      {
        "symbol": "(",
        "context": "CreateProcedureContext"
      },
      {
        "symbol": ")",
        "context": "CreateProcedureContext"
      },
      {
        "children": [
          {
            "symbol": "BEGIN",
            "context": "BlockStatementContext"
          },
          {
            "children": [
              {
                "symbol": "DECLARE",
                "context": "DeclareVariableContext"
              },
              {
                "symbol": "`var1`",
                "context": "UidListContext"
              },
              {
                "symbol": "INT",
                "context": "DimensionDataTypeContext"
              }
            ]
      ...
    </pre>
  </div>
</div>
Please explore the `plsql-examples` directory for additional test cases and examples to see how PlSql-Parser handles various PL/SQL scenarios.

## Contributions and Feedback

Contributions to the project are welcome! If you encounter any issues or have suggestions for improvements, feel free to open an issue.

## Thanks

Thank you for considering PlSql-Parser for your PL/SQL parsing needs. We hope this tool proves valuable in your development and analysis workflows. Happy coding!
