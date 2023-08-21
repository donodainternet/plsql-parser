"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getASTAsJSON = exports.getASTAsCompleteJSON = void 0;
const PlSqlParser_1 = require("./PlSqlParser");
function getASTAsCompleteJSON(statements) {
    const plsqlparser = new PlSqlParser_1.PlSqlParser();
    let result = {};
    try {
        result = plsqlparser
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
    const plsqlparser = new PlSqlParser_1.PlSqlParser();
    let result = {};
    try {
        result = plsqlparser
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