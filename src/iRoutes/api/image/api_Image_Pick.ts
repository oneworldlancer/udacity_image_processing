import express, { Router } from "express";
import path from "path";
import { iDebugManager as dbgManager } from "../../../iUtility/iDebugManager";
import { iImageManager as imgManager } from "../../../iManager/ImageManager/iImageManager";

// #region "Params"

const route_image_pick: Router = express.Router();

// #endregion

// #region "API"

/* api-GET*/
route_image_pick.get("/", (req: express.Request, res: express.Response) => {
  try {
    const fileType = ".jpg";

    const folderPath: string = path.join(
      __dirname,
      "../../../public/iImages/Full",
      ""
    );

    // Get Images list in folder
    imgManager
      .Image_Get_List_ImageName_ByFolderID(folderPath)
      .then(function (values) {
        if (Array.isArray(values)) {
          let imageLists = "<ol >";

          for (let i = 0; i < values.length; i++) {
            if (path.extname(values[i]) === fileType) {
              const imgSRC = "/Full/" + values[i];

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
          res.writeHead(200, {
            "Content-type": "text/html",
          });
          res.end(imageLists);
        }
      });
  } catch (error: string | Error | unknown | null) {
    dbgManager.iDebug_Message(error);
  }
});

// #endregion

export default route_image_pick;
