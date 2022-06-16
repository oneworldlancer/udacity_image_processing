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
        var imgNameList = void 0, i_1;
        var folderPath = path_1.default.join(__dirname, "../../../public/iImages/Full", "");
        //////////////////////////////////////
        // imgNameList =
        iImageManager_1.iImageManager
            .Image_Get_List_ImageName_ByFolderID(folderPath)
            .then(function (values) {
            if (Array.isArray(values)) {
                var imageLists = "<ul>";
                for (i_1 = 0; i_1 < values.length; i_1++) {
                    if (path_1.default.extname(values[i_1]) === fileType_1) {
                        /*       imageLists +=
                       '<li><a href="/?image=' +
                       values[i] +
                       '">' +
                       values[i] +
                       "</li>";  */
                        imageLists +=
                            '<li><a href="/api/img/get?filename=' +
                                iImageManager_1.iImageManager.Image_Get_FileName(values[i_1]) +
                                '&width=300&height=300">' +
                                values[i_1] +
                                "</li>";
                    }
                }
                imageLists += "</ul>";
                res.writeHead(200, { "Content-type": "text/html" });
                res.end(imageLists);
                /*   for (i = 0; i < values.length; i++) {
               if (path.extname(values[i]) === fileType) {
                   // imgNameList.push(values[i]); //store the file name into the array files
                   dbgManager.iDebug_Message(values[i]);
               }
           }
           dbgManager.iDebug_Message(
               "apo-list-img-values-promises == " + values[0]
           ); */
            }
            /*  dbgManager.iDebug_Message(
                "imgNameList-promise == " + values.length
            ); */
            //console.log(values);
        });
    }
    catch (error) {
        iDebugManager_1.iDebugManager.iDebug_Message(error);
    }
});
// #endregion
exports.default = route_image_pick;
