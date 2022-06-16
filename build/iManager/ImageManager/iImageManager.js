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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.iImageManager = void 0;
var path_1 = __importDefault(require("path"));
var sharp_1 = __importDefault(require("sharp"));
var iDebugManager_1 = require("../../iUtility/iDebugManager");
var iImageManager = /** @class */ (function () {
    function iImageManager(folder) {
        this.folder = folder;
    }
    /* Image_Resize_Save_FileName */
    iImageManager.Image_Resize_Save_FileName = function (imgName, imgExt, imgThumName, imgWidth, imgHeight, buffer) {
        return __awaiter(this, void 0, void 0, function () {
            var filepath, outpath, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        filepath = path_1.default.join(__dirname, "../../public/iImages/Full/", "".concat(imgName, ".").concat(imgExt));
                        outpath = path_1.default.join(__dirname, "../../public/iImages/Thum/", imgThumName);
                        sharp_1.default.cache(false);
                        iDebugManager_1.iDebugManager.iDebug_Message("Image_Resize_Save_FileName == " + "START");
                        return [4 /*yield*/, (0, sharp_1.default)(filepath)
                                .resize(imgWidth, imgHeight, {
                                fit: sharp_1.default.fit.fill,
                                withoutEnlargement: true,
                            })
                                .toFile(outpath)];
                    case 1:
                        _a.sent();
                        iDebugManager_1.iDebugManager.iDebug_Message("Image_Resize_Save_FileName == " + "END");
                        return [2 /*return*/, imgThumName];
                    case 2:
                        error_1 = _a.sent();
                        iDebugManager_1.iDebugManager.iDebug_Message(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /*  */
    iImageManager.Image_Get_FileName = function (imgName) {
        try {
            return imgName.split(".").slice(0, -1).join(".").toString();
        }
        catch (error) {
            iDebugManager_1.iDebugManager.iDebug_Message(error);
            return "null";
        }
    };
    /* Image_Get_FileExt */
    iImageManager.Image_Get_FileExt = function (imgName) {
        try {
            return imgName.substr(imgName.lastIndexOf(".") + 1);
        }
        catch (error) {
            iDebugManager_1.iDebugManager.iDebug_Message(error);
            return "null";
        }
    };
    /* Image_Get_ThumName */
    iImageManager.Image_Get_ThumName = function (imgName, imgExt, imgWidth, imgHeight) {
        //return path.resolve(`${imgName}/${filename}`);
        return "".concat(imgName, "_thum_").concat(imgWidth, "_").concat(imgHeight, ".").concat(imgExt);
    };
    /* Image_Get_FilePath */
    iImageManager.Image_Get_FilePath = function (filename) {
        //return path.resolve(`${this.folder}/${filename}`)
        return "";
    };
    /* Image_Check_IfExist */
    iImageManager.Image_Check_IfExist = function (imgThumName) {
        return __awaiter(this, void 0, void 0, function () {
            var filepath, Fs, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        filepath = path_1.default.join(__dirname, "../../public/iImages/Thum/", imgThumName);
                        Fs = require("fs").promises;
                        return [4 /*yield*/, Fs.access(filepath)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 2:
                        error_2 = _a.sent();
                        iDebugManager_1.iDebugManager.iDebug_Message("Image_Check_IfExist  == " + error_2);
                        return [2 /*return*/, false];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /* Image_Get_List_ImageName_ByFolderID - get the list of jpg files in the image dir */
    iImageManager.Image_Get_List_ImageName_ByFolderID = function (imageDir) {
        return __awaiter(this, void 0, void 0, function () {
            var fileType, files, i, fsp, names, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fileType = ".jpg", files = [];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        fsp = require("fs-promise");
                        return [4 /*yield*/, fsp.readdir(imageDir)];
                    case 2:
                        names = _a.sent();
                        /*   dbgManager.iDebug_Message("names[0]== " + names[0]); */
                        return [2 /*return*/, names];
                    case 3:
                        error_3 = _a.sent();
                        iDebugManager_1.iDebugManager.iDebug_Message(error_3);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return iImageManager;
}());
exports.iImageManager = iImageManager;
