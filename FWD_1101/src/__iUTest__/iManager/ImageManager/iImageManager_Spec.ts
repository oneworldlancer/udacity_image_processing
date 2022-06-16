import { response } from "express";
import supertest from "supertest";
import { iValidatorManager as validManager } from "../../../iUtility/iValidatorManager";
import { iDebugManager as dbgManager } from "../../../iUtility/iDebugManager";
import { iImageManager as imgManager } from "../../../iManager/ImageManager/iImageManager";

// #region "__iUTest__ iManager-ImageManager"

describe("__iUTest__ iManager-ImageManager", () => {
    it("imgManager.Image_Get_ThumName::\nSHOULD return 'img1_thum_200_200.jpg'", () => {
        try {
            expect(
                imgManager.Image_Get_ThumName("img1", "jpg", 200, 200)
            ).toEqual("img1_thum_200_200.jpg");
        } catch (error) {
            dbgManager.iDebug_Message(error);
        }
    });
});

// #endregion