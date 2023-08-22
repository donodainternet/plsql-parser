"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getASTAsJSON = exports.getASTAsCompleteJSON = void 0;
const PlSqlToAst_1 = require("./PlSqlToAst");
function getASTAsCompleteJSON(statements) {
    const plsqltoast = new PlSqlToAst_1.PlSqlToAst();
    let result = {};
    try {
        result = plsqltoast
            .createParser(statements)
            .parse()
            .traverse()
            .flatten()
            .getResult();
    }
    catch (error) {
        console.error('An error occurred:', error);
    }
    return result;
}
exports.getASTAsCompleteJSON = getASTAsCompleteJSON;
function getASTAsJSON(statements) {
    const plsqltoast = new PlSqlToAst_1.PlSqlToAst();
    let result = {};
    try {
        result = plsqltoast
            .createParser(statements)
            .parse()
            .traverse()
            .resume()
            .flatten()
            .getResult();
    }
    catch (error) {
        console.error('An error occurred:', error);
    }
    return result;
}
exports.getASTAsJSON = getASTAsJSON;
//# sourceMappingURL=index.js.map