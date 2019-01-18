
function deepCopy<T>(source: T): T {
    let type = judgeType(source);
    let sourceCopy: any;

    if (type === 'array') {
        sourceCopy = [];
    } else if (type === 'object') {
        sourceCopy = {};
    } else {
        return source;
    }

    for (const item in source) {
        if (Object.prototype.hasOwnProperty.call(source, item)) {
            let itemType = judgeType(source[item]);
            if (itemType === 'array' || itemType === 'object') {
                sourceCopy[item] = deepCopy(source[item]);
            } else {
                sourceCopy[item] = source[item];
            }
        }

    }

    return sourceCopy;

}

function judgeType(obj: any): string {
    const objToString = Object.prototype.toString;
    const typeMap = {
        "[object Boolean]": "boolean",
        "[object String]": "string",
        "[object Number]": "number",
        "[object Array]": "array",
        "[object Date]": "date",
        "[object RegExp]": "regExp",
        "[object Undefined]": "undefined",
        "[object Null]": "null",
        "[object Object]": "object",

    }

    if (obj instanceof Element) {
        return 'element';
    }
    return typeMap[objToString.call(obj)];

}

export default deepCopy;