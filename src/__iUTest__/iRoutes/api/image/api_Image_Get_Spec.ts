//import supertest from "supertest";
import { iDebugManager as dbgManager } from "../../../../iUtility/iDebugManager";
import fs from "fs";
import path from "path";
import { iImageManager as imgManager } from "../../../../iManager/ImageManager/iImageManager";
//import route_image_get from "../../../../iRoutes/api/image/api_Image_Get";

// #region "Params"

//const request: supertest.SuperTest<supertest.Test> = supertest(route_image_get);

// #endregion

// #region "__iUTest__ route_image_get"

describe("__iUTest__ Image", () => { 
  it("route_image_get-Resize if NOT-Exist (GET('/'))", async () => {
    try {
      const img_Name = "me",
        img_Ext = "jpg",
        img_Width = 200,
        img_Height = 200;

      const img_Name_Thum: string = imgManager.Image_Get_ThumName(
        img_Name,
        img_Ext,
        img_Width,
        img_Height
      );

      dbgManager.iDebug_Message(`__iUTest__img_Name_Thum == ${img_Name_Thum}`);

      expect(img_Name_Thum).toEqual(
        `${img_Name}_thum_${img_Width}_${img_Height}.${img_Ext}`
      ); /* "me_thum_200_200.jpg" */

      const img_IsExist: boolean = await imgManager.Image_Check_IfExist(
        path.join(
          __dirname,
          "../../../../../src/public/iImages/Thum/",
          img_Name_Thum
        )
      );

      dbgManager.iDebug_Message(`__iUTest__img_IsExist == ${img_IsExist}`);

      if (img_IsExist) {
        // Remove Existing
        fs.unlink(
          path.join(
            __dirname,
            "../../../../../src/public/iImages/Thum/",
            img_Name_Thum
          ),
          (err) => {
            dbgManager.iDebug_Message(`fs.unlink-img_IsExist-err == ${err}`);

            expect(err).toBeNull;
          }
        );
      }

      // Generate New Image with New Size
      await imgManager.Image_Resize_Save_FileName(
        img_Name,
        img_Ext,
        img_Name_Thum,
        img_Width,
        img_Height,
        path.join(
          __dirname,
          "../../../../../src/public/iImages/Full/",
          `${img_Name}.${img_Ext}`
        ),
        path.join(
          __dirname,
          "../../../../../src/public/iImages/Thum/",
          img_Name_Thum
        )
      );

      setTimeout(async function () {
        const img_IsExist_NewResize: boolean =
          await imgManager.Image_Check_IfExist(
            path.join(
              __dirname,
              "../../../../../src/public/iImages/Thum/",
              img_Name_Thum
            )
          );

        dbgManager.iDebug_Message(
          `__iUTest__img_IsExist_NewResize == ${img_IsExist_NewResize}`
        );

        expect(img_IsExist_NewResize).toBeTrue;
        
      }, 1000);
    } catch (error: string | Error | unknown | null) {
      dbgManager.iDebug_Message(error);
    }
  });
});

// #endregion
