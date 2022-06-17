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
var path_1 = __importDefault(require("path"));
var multer_1 = __importDefault(require("multer"));
var iDebugManager_1 = require("../../../iUtility/iDebugManager");
// #region "Params"
var route_image_new = express_1.default.Router();
// #endregion
// #region "Middleware"
route_image_new.use(express_1.default.static(__dirname + "../../../public/iWeb", {
    etag: false,
}));
route_image_new.use(express_1.default.static(__dirname + "../../../public/iWeb/img", {
    etag: false,
}));
route_image_new.use(express_1.default.static(__dirname + "../../../public/iWeb/css", {
    etag: false,
}));
// #endregion
// #region "Multer - API Endpoint for uploading file"
var x;
/* Multer Object */
var multerStorage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path_1.default.join(__dirname, "../../../../src/public/iImages/Full"));
    },
    filename: function (req, file, cb) {
        iDebugManager_1.iDebugManager.iDebug_Message("EXT== " +
            file.mimetype.split("/")[1] +
            "   -  " +
            "FName==" +
            file.originalname);
        x = path_1.default.parse(file.originalname).name + "_" + Date.now();
        cb(null, x + ".jpg");
    },
});
/* Multer Function with Filter */
var upload = (0, multer_1.default)({
    storage: multerStorage,
    fileFilter: function (req, file, callback) {
        var ext = path_1.default.extname(file.originalname);
        if (ext !== ".png" && ext !== ".jpg" && ext !== ".gif" && ext !== ".jpeg") {
            return callback(new Error("Only images are allowed"));
        }
        callback(null, true);
    },
    limits: {
        fileSize: 1024 * 1024,
    },
});
// #endregion
// #region "API"
/* api-GET */
route_image_new.get("/", function (req, res) {
    //do something
    //res.send("api- route_image_new!");
    res
        .status(200)
        .sendFile(path_1.default.join(__dirname + "../../../../public/iWeb/img/upload.html"));
});
/* api-POST */
route_image_new.post("/", upload.single("fUpload"), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        try {
            iDebugManager_1.iDebugManager.iDebug_Message(req.file);
            /*     res.status(200).json({
        status: "success",
        message: "File created successfully!!",
        });
         */
            /*   res.status(200).sendFile(
              path.join(
                  __dirname + "../../../../src/public/iWeb/img/list.html"
              )
          ); */
            res.status(200).redirect("/api/img/get?filename=".concat(x, "&width=300&height=300"));
        }
        catch (error) {
            iDebugManager_1.iDebugManager.iDebug_Message(error);
            /*   res.json({
        error,
        }); */
            res.status(500).send(JSON.stringify({
                status: error,
            }));
        }
        return [2 /*return*/];
    });
}); });
// #endregion
exports.default = route_image_new;
