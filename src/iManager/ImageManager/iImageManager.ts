import sharp from "sharp";
import { iDebugManager as dbgManager } from "../../iUtility/iDebugManager";

export class iImageManager {
  folder: string;
  constructor(folder: string) {
    this.folder = folder;
  }

  /* Image_Resize_Save_FileName */
  static async Image_Resize_Save_FileName(
    imgName: string,
    imgExt: string,
    imgThumName: string,
    imgWidth: number,
    imgHeight: number,
    imgFromPath: string,
    imgToPath: string
  ) {
    try {
      sharp.cache(false);

      dbgManager.iDebug_Message("Image_Resize_Save_FileName == " + "START");

      await sharp(imgFromPath)
        .resize(imgWidth, imgHeight, {
          fit: sharp.fit.fill,
          withoutEnlargement: true,
        })
        .toFile(imgToPath);

      dbgManager.iDebug_Message("Image_Resize_Save_FileName == " + "END");

      return imgThumName;
    } catch (error: string | Error | unknown | null) {
      dbgManager.iDebug_Message(error);
    }
  }

  /*  */
  static Image_Get_FileName(imgName: string): string {
    try {
      return imgName.split(".").slice(0, -1).join(".").toString();
    } catch (error: string | Error | unknown | null) {
      dbgManager.iDebug_Message(error);
      return "null";
    }
  }

  /* Image_Get_FileExt */
  static Image_Get_FileExt(imgName: string): string {
    try {
      return imgName.substr(imgName.lastIndexOf(".") + 1);
    } catch (error: string | Error | unknown | null) {
      dbgManager.iDebug_Message(error);
      return "null";
    }
  }

  /* Image_Get_ThumName */
  static Image_Get_ThumName(
    imgName: string,
    imgExt: string,
    imgWidth: string | number,
    imgHeight: string | number
  ): string {
    //return path.resolve(`${imgName}/${filename}`);
    return `${imgName}_thum_${imgWidth}_${imgHeight}.${imgExt}`;
  }

  /* Image_Check_IfExist */
  static async Image_Check_IfExist(imgRootPath: string): Promise<boolean> {
    try {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const { promises: Fs } = require("fs");

      await Fs.access(imgRootPath);

      return true;
    } catch (error: string | Error | unknown | null) {
      dbgManager.iDebug_Message("Image_Check_IfExist  == " + error);
      return false;
    }
  }

  /* Image_Get_List_ImageName_ByFolderID - get the list of jpg files in the image dir */
  static async Image_Get_List_ImageName_ByFolderID(
    imageDir: string
  ): Promise<unknown> {
    try {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const fsp = require("fs-promise");

      const names = await fsp.readdir(imageDir);
      /*   dbgManager.iDebug_Message("names[0]== " + names[0]); */

      return names;
    } catch (error: string | Error | unknown | null) {
      dbgManager.iDebug_Message(error);
    }
  }
}
