"use strict";
exports.__esModule = true;
function deepCopy(source) {
    var type = judgeType(source);
    var sourceCopy;
    if (type === 'array') {
        sourceCopy = [];
    }
    else if (type === 'object') {
        sourceCopy = {};
    }
    else {
        return source;
    }
    for (var item in source) {
        if (Object.prototype.hasOwnProperty.call(source, item)) {
            var itemType = judgeType(source[item]);
            if (itemType === 'array' || itemType === 'object') {
                sourceCopy[item] = deepCopy(source[item]);
            }
            else {
                sourceCopy[item] = source[item];
            }
        }
    }
    return sourceCopy;
}
function judgeType(obj) {
    var objToString = Object.prototype.toString;
    var typeMap = {
        "[object Boolean]": "boolean",
        "[object String]": "string",
        "[object Number]": "number",
        "[object Array]": "array",
        "[object Date]": "date",
        "[object RegExp]": "regExp",
        "[object Undefined]": "undefined",
        "[object Null]": "null",
        "[object Object]": "object"
    };
    if (obj instanceof Element) {
        return 'element';
    }
    return typeMap[objToString.call(obj)];
}
exports["default"] = deepCopy;
//# sourceMappingURL=index.js.map