"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanObject = void 0;
function cleanObject(object) {
    Object.entries(object).forEach(([k, v]) => {
        if (v && typeof v === 'object')
            cleanObject(v);
        if ((v && typeof v === 'object' && !Object.keys(v).length) ||
            v === null ||
            v === undefined ||
            v.length === 0) {
            if (!(v instanceof Date))
                delete object[k];
        }
    });
    return object;
}
exports.cleanObject = cleanObject;
//# sourceMappingURL=clean-object.js.map