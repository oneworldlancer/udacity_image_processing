import express from "express";

import path from "path";
import multer from "multer";
import { iDebugManager as dbgManager } from "../../../iUtility/iDebugManager";

// #region "Params"

const route_image_new = express.Router();

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

let x: string;

/* Multer Object */

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../../../src/public/iImages/Full"));
  },
  filename: (req, file, cb) => {
    dbgManager.iDebug_Message(
      "EXT== " +
        file.mimetype.split("/")[1] +
        "   -  " +
        "FName==" +
        file.originalname
    );

    x = path.parse(file.originalname).name + "_" + Date.now();

    cb(null, x + ".jpg");
  },
});

/* Multer Function with Filter */
const upload = multer({
  storage: multerStorage,
  fileFilter: function (req, file, callback) {
    const ext = path.extname(file.originalname);
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
route_image_new.get("/", (req, res) => {
  //do something
  //res.send("api- route_image_new!");
  res
    .status(200)
    .sendFile(path.join(__dirname + "../../../../public/iWeb/img/upload.html"));
});

/* api-POST */
route_image_new.post("/", upload.single("fUpload"), async (req, res) => {
  try {
    dbgManager.iDebug_Message(req.file);

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

    res.status(200).redirect(`/api/img/get?filename=${x}&width=300&height=300`);
  } catch (error) {
    dbgManager.iDebug_Message(error);
    /*   res.json({
error,
}); */

    res.status(500).send(
      JSON.stringify({
        status: error,
      })
    );
  }
});

// #endregion

export default route_image_new;
