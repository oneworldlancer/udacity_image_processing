import express from "express";
import fs from "fs";
import url from "url";
import path from "path";
import { iDebugManager as dbgManager } from "../../../iUtility/iDebugManager";
import { iValidatorManager as validManager } from "../../../iUtility/iValidatorManager";
import { iImageManager as imgManager } from "../../../iManager/ImageManager/iImageManager";

// #region "Params"

const img_Path_SizeFull: string = "../../../public/iImages/Full/";
const img_Path_SizeThum: string = "../../../public/iImages/Thum/";
const route_image_pick = express.Router();

// #endregion

// #region "API"

/* api-GET*/
route_image_pick.get("/", (req, res) => {
    try {
        let fileType = ".jpg";
        let imgNameList: Array<String>, i;

        const folderPath = path.join(
            __dirname,
            "../../../public/iImages/Full",
            ""
        );

        // Get Images list in folder
        imgManager
            .Image_Get_List_ImageName_ByFolderID(folderPath)
            .then(function (values) {
                if (Array.isArray(values)) {
                    var imageLists = "<ol >";

                    for (i = 0; i < values.length; i++) {
                        if (path.extname(values[i]) === fileType) {
                            let imgSRC = "/Full/" + values[i];

                            imageLists +=
                                '<li style="float:ledt;display: inline;float: left; width:120px;marging:auto;"><br/><img src="' +
                                imgSRC +
                                '"  style="width:100px;height:100px;" /><br/><a href="/api/img/get?filename=' +
                                imgManager.Image_Get_FileName(values[i]) +
                                '&width=300&height=300"/>' +
                                values[i] +
                                "</li>";
                        }
                    }
                    imageLists += "</ol>";
                    res.writeHead(200, { "Content-type": "text/html" });
                    res.end(imageLists);
                }
            });
    } catch (error) {
        dbgManager.iDebug_Message(error);
    }
});

// #endregion

export default route_image_pick;
