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
var express_1 = __importDefault(require("express"));
var fs_1 = __importDefault(require("fs"));
var url_1 = __importDefault(require("url"));
var path_1 = __importDefault(require("path"));
var iDebugManager_1 = require("../../../iUtility/iDebugManager");
var iValidatorManager_1 = require("../../../iUtility/iValidatorManager");
var iImageManager_1 = require("../../../iManager/ImageManager/iImageManager");
// #region "Params"
var route_image_get = express_1.default.Router();
var img_Name = "img1", img_Width = 200, img_Height = 200;
var img_Ext = "jpg";
// #endregion
// #region "API"
/* api-GET*/
route_image_get.get("/", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var query, img_Name_Thum_1, img_IsExist, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                query = url_1.default.parse(req.url, true).query;
                /* Image-Name */
                if (typeof query.filename !== "undefined") {
                    img_Name = query.filename.toString();
                }
                else {
                    img_Name = "img1";
                }
                /* Image-Width */
                if (typeof query.width !== "undefined") {
                    if (iValidatorManager_1.iValidatorManager.Validator_isNumber(query.width.toString())) {
                        img_Width = parseInt(query.width.toString());
                    }
                    else {
                        img_Width = 200;
                    }
                }
                else {
                    img_Width = 200;
                }
                /* Image-Height */
                if (typeof query.height !== "undefined") {
                    if (iValidatorManager_1.iValidatorManager.Validator_isNumber(query.height.toString())) {
                        img_Height = parseInt(query.height.toString());
                    }
                    else {
                        img_Height = 200;
                    }
                }
                else {
                    img_Height = 200;
                }
                img_Name_Thum_1 = iImageManager_1.iImageManager.Image_Get_ThumName(img_Name, "jpg", img_Width, img_Height);
                iDebugManager_1.iDebugManager.iDebug_Message("img_Name_Thum == ".concat(img_Name_Thum_1));
                return [4 /*yield*/, iImageManager_1.iImageManager.Image_Check_IfExist(path_1.default.join(__dirname, "../../public/iImages/Thum/", img_Name_Thum_1))];
            case 1:
                img_IsExist = _a.sent();
                iDebugManager_1.iDebugManager.iDebug_Message("img_IsExist == ".concat(img_IsExist));
                if (!img_IsExist) return [3 /*break*/, 2];
                fs_1.default.readFile(path_1.default.join(__dirname, "../../../public/iImages/Thum/", img_Name_Thum_1), function (err, content) {
                    if (err) {
                        res.writeHead(400, {
                            "Content-type": "text/html",
                        });
                        console.log(err);
                        res.end("No such image");
                    }
                    else {
                        //setup response as IMAGE
                        res.writeHead(200, {
                            "Content-type": "image/jpg",
                        });
                        res.end(content);
                    }
                });
                return [3 /*break*/, 4];
            case 2: return [4 /*yield*/, iImageManager_1.iImageManager.Image_Resize_Save_FileName(img_Name, img_Ext, img_Name_Thum_1, img_Width, img_Height, path_1.default.join(__dirname, "../../public/iImages/Full/", "".concat(img_Name, ".").concat(img_Ext)), path_1.default.join(__dirname, "../../public/iImages/Thum/", img_Name_Thum_1))];
            case 3:
                _a.sent();
                setTimeout(function () {
                    fs_1.default.readFile(path_1.default.join(__dirname, "../../../public/iImages/Thum/", img_Name_Thum_1), function (err, content) {
                        if (err) {
                            res.writeHead(400, {
                                "Content-type": "text/html",
                            });
                            console.log(err);
                            res.end("No such image");
                        }
                        else {
                            //setup response as IMAGE
                            res.writeHead(200, {
                                "Content-type": "image/jpg",
                            });
                            res.end(content);
                        }
                    });
                }, 1000);
                _a.label = 4;
            case 4: return [3 /*break*/, 6];
            case 5:
                error_1 = _a.sent();
                iDebugManager_1.iDebugManager.iDebug_Message(error_1);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); });
// #endregion
exports.default = route_image_get;
