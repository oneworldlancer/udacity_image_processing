import { iDebugManager as dbgManager } from "../../../iUtility/iDebugManager";
import { iImageManager as imgManager } from "../../../iManager/ImageManager/iImageManager";

// #region "__iUTest__ iManager-ImageManager"

describe("__iUTest__ iManager-ImageManager", () => {
  it("imgManager.Image_Get_ThumName::\nSHOULD return 'img1_thum_200_200.jpg'", () => {
    try {
      expect(imgManager.Image_Get_ThumName("img1", "jpg", 200, 200)).toEqual(
        "img1_thum_200_200.jpg"
      );
    } catch (error: string | Error | unknown | null) {
      dbgManager.iDebug_Message(error);
    }
  });
});

// #endregion
