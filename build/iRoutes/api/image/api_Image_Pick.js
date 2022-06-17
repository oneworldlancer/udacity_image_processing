"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var iDebugManager_1 = require("../../../iUtility/iDebugManager");
var iImageManager_1 = require("../../../iManager/ImageManager/iImageManager");
// #region "Params"
var route_image_pick = express_1.default.Router();
// #endregion
// #region "API"
/* api-GET*/
route_image_pick.get("/", function (req, res) {
    try {
        var fileType_1 = ".jpg";
        var folderPath = path_1.default.join(__dirname, "../../../public/iImages/Full", "");
        // Get Images list in folder
        iImageManager_1.iImageManager
            .Image_Get_List_ImageName_ByFolderID(folderPath)
            .then(function (values) {
            if (Array.isArray(values)) {
                var imageLists = "<ol >";
                for (var i = 0; i < values.length; i++) {
                    if (path_1.default.extname(values[i]) === fileType_1) {
                        var imgSRC = "/Full/" + values[i];
                        imageLists +=
                            '<li style="float:ledt;display: inline;float: left; width:120px;marging:auto;"><br/><img src="' +
                                imgSRC +
                                '"  style="width:100px;height:100px;" /><br/><a href="/api/img/get?filename=' +
                                iImageManager_1.iImageManager.Image_Get_FileName(values[i]) +
                                '&width=300&height=300"/>' +
                                values[i] +
                                "</li>";
                    }
                }
                imageLists += "</ol>";
                res.writeHead(200, {
                    "Content-type": "text/html",
                });
                res.end(imageLists);
            }
        });
    }
    catch (error) {
        iDebugManager_1.iDebugManager.iDebug_Message(error);
    }
});
// #endregion
exports.default = route_image_pick;
