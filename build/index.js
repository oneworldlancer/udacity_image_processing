"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var iDebugManager_1 = require("./iUtility/iDebugManager");
var api_Image_Get_1 = __importDefault(require("./iRoutes/api/image/api_Image_Get"));
var api_Image_New_1 = __importDefault(require("./iRoutes/api/image/api_Image_New"));
var api_Image_Pick_1 = __importDefault(require("./iRoutes/api/image/api_Image_Pick"));
// #region "iParams"
var app = (0, express_1.default)();
var port = 3000;
// #endregion
// #region "iServer"
app.listen(port, function () {
    console.log("server started at localhost: port ", port);
});
/* Static Files */
app.use(express_1.default.static("/public", {
    etag: true,
}));
app.use(express_1.default.static(__dirname + "/public/iWeb", {
    etag: true,
}));
app.use(express_1.default.static(__dirname + "/public/css", {
    etag: true,
}));
app.use(express_1.default.static(__dirname + "/public/js", {
    etag: true,
}));
app.use(express_1.default.static(__dirname + "/public/img", {
    etag: true,
}));
app.use(express_1.default.static(__dirname + "/public/iImages", {
    etag: true,
}));
// #endregion
// #region "iApis"
//* HOME Page */
app.get("/", function (req, res) {
    try {
        /*  res.status(200).send("Hello, world!" + __dirname); */
        res
            .status(200)
            .sendFile(path_1.default.join(__dirname + "/public/iWeb/img/index.html"));
    }
    catch (error) {
        iDebugManager_1.iDebugManager.iDebug_Message(error);
    }
    //console.log("__dirname == " + __dirname);
    //res.send("Hello, world!"  + __dirname);
    //res.send("<html> <head>server Response</head><body><h1> This page was render direcly from the server <p>Hello there welcome to my website</p></h1></body></html>");
    ///// res.sendFile(__dirname + "/iWeb/index.html");
    // res.sendFile(__dirname + "/public/iWeb/index.html");
});
/* Image APIs */
app.get("/api", function (req, res) {
    try {
        res
            .status(200)
            .sendFile(path_1.default.join(__dirname + "/public/iWeb/img/index.html"));
    }
    catch (error) {
        iDebugManager_1.iDebugManager.iDebug_Message(error);
    }
    // res.send("api- Hello, world!");
});
// serve your css as static
/* app.get("/api", (req, res) => {
    res.send("api- Hello, world!");
}); */
// #endregion
// #region "iRoutes"
try {
    app.use("/api/img/get", api_Image_Get_1.default);
    app.use("/api/img/new", api_Image_New_1.default);
    app.use("/api/img/pick", api_Image_Pick_1.default);
}
catch (error) {
    iDebugManager_1.iDebugManager.iDebug_Message(error);
}
// #endregion
// #region ""
// #endregion
exports.default = app;
