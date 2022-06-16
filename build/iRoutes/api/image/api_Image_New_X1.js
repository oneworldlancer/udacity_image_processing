"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var multer_1 = __importDefault(require("multer"));
var iDebugManager_1 = require("../../../iUtility/iDebugManager");
var route_image_new = express_1.default.Router();
route_image_new.get('/', function (req, res) {
    //do something
    //res.send("api- route_image_new!");
    res
        .status(200)
        .sendFile(path_1.default.join(__dirname + "../../../../public/iWeb/img/upload.html"));
});
//API Endpoint for uploading file
var upload = (0, multer_1.default)({ dest: path_1.default.join(__dirname, "../../../../src/public/iImages/Full") });
route_image_new.post("/", upload.single("fUpload"), function (req, res) {
    try {
        // Stuff to be added later
        //console.log(req.file);
        console.log(req.body);
        console.log(req.file);
        res.json({ message: "Successfully uploaded files" });
    }
    catch (error) {
        iDebugManager_1.iDebugManager.iDebug_Message(error);
    }
});
//route_image_new.post("/upload_files", upload.array("files"), uploadFiles);
/*route_image_new.post("/api/uploadFile", (req, res) => {
   
  try {
    
     // const upload = multer({ dest: "public/files" });


  } catch (error) {
    
  }
  
  
  
    // Stuff to be added later
}); */
exports.default = route_image_new;
