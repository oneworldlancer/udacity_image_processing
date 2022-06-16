import express from "express";
import fs from "fs";
import url from "url";
import path from "path";
import { iDebugManager as dbgManager } from "../../../iUtility/iDebugManager";
import { iValidatorManager as validManager } from "../../../iUtility/iValidatorManager";
import { iImageManager as imgManager } from "../../../iManager/ImageManager/iImageManager";
import { bool } from "sharp";

// #region "Params"

const route_image_get = express.Router();

const img_Path_SizeFull: string = "../../../public/iImages/Full/";
const img_Path_SizeThum: string = "../../../public/iImages/Thum/";

let img_Name: string = "img1",
    img_Ext: string = "jpg",
    img_Width: number = 200,
    img_Height: number = 200,
    img_Size: number = 0;

// #endregion

// #region "API"

/* api-GET*/
route_image_get.get("/", async (req, res) => {
    try {
        /* URL */
        var query = url.parse(req.url, true).query;

        /* Image-Name */
        if (typeof query.filename !== "undefined") {
            img_Name = query.filename.toString();
        } else {
            img_Name = "img1";
        }

        /* Image-Width */
        if (typeof query.width !== "undefined") {
            if (validManager.Validator_isNumber(query.width.toString())) {
                img_Width = parseInt(query.width.toString());
            } else {
                img_Width = 200;
            }
        } else {
            img_Width = 200;
        }

        /* Image-Height */
        if (typeof query.height !== "undefined") {
            if (validManager.Validator_isNumber(query.height.toString())) {
                img_Height = parseInt(query.height.toString());
            } else {
                img_Height = 200;
            }
        } else {
            img_Height = 200;
        }

        /* Check Image IsExist */
        let img_Name_Thum: string;
        let img_IsExist: boolean;

        img_Name_Thum = imgManager.Image_Get_ThumName(
            img_Name,
            "jpg",
            img_Width,
            img_Height
        );

        dbgManager.iDebug_Message(`img_Name_Thum == ${img_Name_Thum}`);

        img_IsExist = await imgManager.Image_Check_IfExist(img_Name_Thum);

        dbgManager.iDebug_Message(`img_IsExist == ${img_IsExist}`);

        if (img_IsExist) {
            fs.readFile(
                path.join(
                    __dirname,
                    "../../../public/iImages/Thum/",
                    img_Name_Thum
                ),
                function (err, content) {
                    if (err) {
                        res.writeHead(400, { "Content-type": "text/html" });
                        console.log(err);
                        res.end("No such image");
                    } else {
                        //setup response as IMAGE
                        res.writeHead(200, { "Content-type": "image/jpg" });
                        res.end(content);
                    }
                }
            );
        } else {
            await imgManager.Image_Resize_Save_FileName(
                img_Name,
                img_Ext,
                img_Name_Thum,
                img_Width,
                img_Height,
                null
            );

            setTimeout(function () {
                fs.readFile(
                    path.join(
                        __dirname,
                        "../../../public/iImages/Thum/",
                        img_Name_Thum
                    ),
                    function (err, content) {
                        if (err) {
                            res.writeHead(400, { "Content-type": "text/html" });
                            console.log(err);
                            res.end("No such image");
                        } else {
                            //setup response as IMAGE
                            res.writeHead(200, { "Content-type": "image/jpg" });
                            res.end(content);
                        }
                    }
                );
            }, 1000);
        }
    } catch (error: unknown) {
        dbgManager.iDebug_Message(error);
    }
});

// #endregion

export default route_image_get;
