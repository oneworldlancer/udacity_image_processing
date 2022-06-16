"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var iDebugManager_1 = require("../../../iUtility/iDebugManager");
var iImageManager_1 = require("../../../iManager/ImageManager/iImageManager");
// #region "__iUTest__ iManager-ImageManager"
describe("__iUTest__ iManager-ImageManager", function () {
    it("imgManager.Image_Get_ThumName::\nSHOULD return 'img1_thum_200_200.jpg'", function () {
        try {
            expect(iImageManager_1.iImageManager.Image_Get_ThumName("img1", "jpg", 200, 200)).toEqual("img1_thum_200_200.jpg");
        }
        catch (error) {
            iDebugManager_1.iDebugManager.iDebug_Message(error);
        }
    });
});
// #endregion
