"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.myWC = void 0;
var fs_1 = __importDefault(require("fs"));
var path = __importStar(require("path"));
function myWC(argv, stream) {
    return __awaiter(this, void 0, void 0, function () {
        var option, fileName, srcDir, filePath, fileName, srcDir, filePath, data, fileContents;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // Command and file name is provided
                    if (argv.length === 5) {
                        option = argv[3];
                        fileName = argv[4];
                        srcDir = path.resolve(__dirname, '..', 'src');
                        filePath = path.join(srcDir, fileName);
                        if (fs_1.default.existsSync(filePath)) {
                            switch (option) {
                                case '-c':
                                    return [2 /*return*/, byteCount(filePath).toString() + ' ' + fileName];
                                case '-l':
                                    return [2 /*return*/, lineCount(filePath) + ' ' + fileName];
                                    ;
                                case '-w':
                                    return [2 /*return*/, wordCount(filePath) + ' ' + fileName];
                                    ;
                                case '-m':
                                    return [2 /*return*/, charCount(filePath) + ' ' + fileName];
                                    ;
                                default:
                                    return [2 /*return*/, 'Invalid option.'];
                            }
                        }
                    }
                    // Only file name is provided
                    if (argv.length === 4) {
                        fileName = argv[3];
                        srcDir = path.resolve(__dirname, '..', 'src');
                        filePath = path.join(srcDir, fileName);
                        if (fs_1.default.existsSync(filePath)) {
                            return [2 /*return*/, lineCount(filePath) + ' ' +
                                    wordCount(filePath) + ' ' +
                                    charCount(filePath) + ' ' +
                                    fileName];
                        }
                    }
                    if (!(stream !== undefined)) return [3 /*break*/, 2];
                    return [4 /*yield*/, readStream(stream)];
                case 1:
                    data = _a.sent();
                    fileContents = data.toString();
                    return [2 /*return*/, lineCount(fileContents) + ' ' +
                            wordCount(fileContents) + ' ' +
                            charCount(fileContents) + ' ' +
                            data];
                case 2: return [2 /*return*/, 'File not found.'];
            }
        });
    });
}
exports.myWC = myWC;
function byteCount(filePath) {
    return fs_1.default.statSync(filePath).size;
}
function lineCount(filePath) {
    var data = fs_1.default.readFileSync(filePath, 'utf8');
    var lines = data.split(/\r\n|\r|\n/).length - 1;
    return lines;
}
function wordCount(filePath) {
    var data = fs_1.default.readFileSync(filePath, 'utf8');
    if (data === '') {
        return 0;
    }
    var words = data.trim().split(/\s+/).length;
    return words;
}
function charCount(filePath) {
    var data = fs_1.default.readFileSync(filePath, 'utf8');
    var chars = data.length;
    return chars;
}
function readStream(stream) {
    return __awaiter(this, void 0, void 0, function () {
        var data, chunk, e_1_1;
        var _a, stream_1, stream_1_1;
        var _b, e_1, _c, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    data = '';
                    _e.label = 1;
                case 1:
                    _e.trys.push([1, 6, 7, 12]);
                    _a = true, stream_1 = __asyncValues(stream);
                    _e.label = 2;
                case 2: return [4 /*yield*/, stream_1.next()];
                case 3:
                    if (!(stream_1_1 = _e.sent(), _b = stream_1_1.done, !_b)) return [3 /*break*/, 5];
                    _d = stream_1_1.value;
                    _a = false;
                    chunk = _d;
                    data += chunk;
                    _e.label = 4;
                case 4:
                    _a = true;
                    return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 12];
                case 6:
                    e_1_1 = _e.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 12];
                case 7:
                    _e.trys.push([7, , 10, 11]);
                    if (!(!_a && !_b && (_c = stream_1.return))) return [3 /*break*/, 9];
                    return [4 /*yield*/, _c.call(stream_1)];
                case 8:
                    _e.sent();
                    _e.label = 9;
                case 9: return [3 /*break*/, 11];
                case 10:
                    if (e_1) throw e_1.error;
                    return [7 /*endfinally*/];
                case 11: return [7 /*endfinally*/];
                case 12: return [2 /*return*/, data];
            }
        });
    });
}
//# sourceMappingURL=wc.js.map