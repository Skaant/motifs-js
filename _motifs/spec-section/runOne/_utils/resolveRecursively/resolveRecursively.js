"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var spec_section_type_enum_js_1 = require("../../../_enums/type/spec-section.type.enum.js");
var clear_js_1 = require("../../../clear/clear.js");
var resolveRecursively_errors_js_1 = require("./_errors/resolveRecursively.errors.js");
/** Recursively iterates through `SpecSection` `group` to `test`. */
function resolveRecursively(section, options) {
    return __awaiter(this, void 0, void 0, function () {
        var result, _i, _a, item, itemResult, ranTest, result;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (options.log && section.type !== spec_section_type_enum_js_1.MODULE)
                        console.log(section.label);
                    if (!section.clear) return [3 /*break*/, 2];
                    return [4 /*yield*/, clear_js_1.default(section.clear)];
                case 1:
                    _b.sent();
                    _b.label = 2;
                case 2:
                    if (!section.group) return [3 /*break*/, 9];
                    result = [];
                    _i = 0, _a = section.group;
                    _b.label = 3;
                case 3:
                    if (!(_i < _a.length)) return [3 /*break*/, 6];
                    item = _a[_i];
                    return [4 /*yield*/, resolveRecursively(item, options)];
                case 4:
                    itemResult = _b.sent();
                    result.push(itemResult);
                    _b.label = 5;
                case 5:
                    _i++;
                    return [3 /*break*/, 3];
                case 6:
                    if (!section.clear) return [3 /*break*/, 8];
                    return [4 /*yield*/, clear_js_1.default(section.clear)];
                case 7:
                    _b.sent();
                    _b.label = 8;
                case 8: return [2 /*return*/, { label: section.label, result: result }];
                case 9:
                    if (!section.test) return [3 /*break*/, 17];
                    ranTest = options.instances
                        ? options.instances.map(function (instance) { return ({
                            result: section.test(instance)
                        }); })
                        : section.test();
                    if (!(ranTest.constructor.name === 'Promise')) return [3 /*break*/, 13];
                    return [4 /*yield*/, ranTest];
                case 10:
                    result = _b.sent();
                    options.log && console.log(' => ' + result);
                    if (!section.clear) return [3 /*break*/, 12];
                    return [4 /*yield*/, clear_js_1.default(section.clear)];
                case 11:
                    _b.sent();
                    _b.label = 12;
                case 12: return [2 /*return*/, { label: section.label, result: result }];
                case 13:
                    options.log && console.log(' => ' + (typeof ranTest === 'boolean'
                        ? ranTest
                        : ranTest.map(function (_a) {
                            var result = _a.result;
                            return result;
                        }).join(', ')));
                    if (!section.clear) return [3 /*break*/, 15];
                    return [4 /*yield*/, clear_js_1.default(section.clear)];
                case 14:
                    _b.sent();
                    _b.label = 15;
                case 15: return [2 /*return*/, { label: section.label, result: ranTest }];
                case 16: return [3 /*break*/, 18];
                case 17: throw new Error(resolveRecursively_errors_js_1.default.NEITHER_GROUP_OR_TEST);
                case 18: return [2 /*return*/];
            }
        });
    });
}
exports.default = resolveRecursively;
