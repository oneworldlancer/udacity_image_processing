import express from "express";
import path from "path";
import { iDebugManager as dbgManager } from "./iUtility/iDebugManager";
import route_image_get from "./iRoutes/api/image/api_Image_Get";
import route_image_new from "./iRoutes/api/image/api_Image_New";
import route_image_pick from "./iRoutes/api/image/api_Image_Pick";

// #region "iParams"

const app: express.Application = express();

const port = 3000;

// #endregion

// #region "iServer"

app.listen(port, () => {
  console.log("server started at localhost: port ", port);
});

/* Static Files */
app.use(
  express.static("/public", {
    etag: true,
  })
);
app.use(
  express.static(__dirname + "/public/iWeb", {
    etag: true,
  })
);
app.use(
  express.static(__dirname + "/public/css", {
    etag: true,
  })
);
app.use(
  express.static(__dirname + "/public/js", {
    etag: true,
  })
);
app.use(
  express.static(__dirname + "/public/img", {
    etag: true,
  })
);
app.use(
  express.static(__dirname + "/public/iImages", {
    etag: true,
  })
);

// #endregion

// #region "iApis"

//* HOME Page */
app.get("/", (req: express.Request, res: express.Response) => {
  try {
    /*  res.status(200).send("Hello, world!" + __dirname); */
    res
      .status(200)
      .sendFile(path.join(__dirname + "/public/iWeb/img/index.html"));
  } catch (error: string | Error | unknown | null) {
    dbgManager.iDebug_Message(error);
  }
});

/* Image APIs */

app.get("/api", (req: express.Request, res: express.Response) => {
  try {
    res
      .status(200)
      .sendFile(path.join(__dirname + "/public/iWeb/img/index.html"));
  } catch (error: string | Error | unknown | null) {
    dbgManager.iDebug_Message(error);
  }

  // res.send("api- Hello, world!");
});

// #endregion

// #region "iRoutes"

try {
  app.use("/api/img/get", route_image_get);
  app.use("/api/img/new", route_image_new);
  app.use("/api/img/pick", route_image_pick);
} catch (error) {
  dbgManager.iDebug_Message(error);
}

// #endregion

export default app;
