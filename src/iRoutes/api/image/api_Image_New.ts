import express, { Router } from "express";
import path from "path";
import multer from "multer";
import { iDebugManager as dbgManager } from "../../../iUtility/iDebugManager";

// #region "Params"

const route_image_new: Router = express.Router();

let img_NewFileName: string;

// #endregion

// #region "Middleware"

route_image_new.use(
  express.static(__dirname + "../../../public/iWeb", {
    etag: false,
  })
);
route_image_new.use(
  express.static(__dirname + "../../../public/iWeb/img", {
    etag: false,
  })
);

route_image_new.use(
  express.static(__dirname + "../../../public/iWeb/css", {
    etag: false,
  })
);

// #endregion

// #region "Multer - API Endpoint for uploading file"

/* Multer Object */

const multerStorage = multer.diskStorage({
  destination: (
    req: express.Request,
    file: Express.Multer.File,
    cb: (error: Error | null, destination: string) => void
  ) => {
    cb(null, path.join(__dirname, "../../../../src/public/iImages/Full"));
  },
  filename: (
    req: express.Request,
    file: Express.Multer.File,
    cb: (error: Error | null, destination: string) => void
  ) => {
    dbgManager.iDebug_Message(
      "EXT== " +
        file.mimetype.split("/")[1] +
        "   -  " +
        "FName==" +
        file.originalname
    );

    img_NewFileName = path.parse(file.originalname).name + "_" + Date.now();

    cb(null, img_NewFileName + ".jpg");
  },
});

/* Multer Function with Filter */
const upload: multer.Multer = multer({
  storage: multerStorage,
  fileFilter: function (
    req: express.Request,
    file: Express.Multer.File,
    callback: multer.FileFilterCallback
  ) {
    const ext: string = path.extname(file.originalname);
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
route_image_new.get("/", (req: express.Request, res: express.Response) => {
  try {
    res
      .status(200)
      .sendFile(
        path.join(__dirname + "../../../../public/iWeb/img/upload.html")
      );
  } catch (error: string | Error | unknown | null) {
    dbgManager.iDebug_Message(error);
  }
});

/* api-POST */
route_image_new.post(
  "/",
  upload.single("fUpload"),
  async (req: express.Request, res: express.Response) => {
    try {
      dbgManager.iDebug_Message(req.file);

      res
        .status(200)
        .redirect(
          `/api/img/get?filename=${img_NewFileName}&width=300&height=300`
        );
    } catch (error: string | Error | unknown | null) {
      dbgManager.iDebug_Message(error);

      res.status(500).send(
        JSON.stringify({
          status: error,
        })
      );
    }
  }
);

// #endregion

export default route_image_new;
