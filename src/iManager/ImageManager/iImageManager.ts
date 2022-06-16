import fs from "fs";
import url from "url";
import path from "path";
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
        buffer?: unknown
    ) {
        try {
          
            //const filename = "new4404.jpg";
            const filepath = path.join(
                __dirname,
                "../../public/iImages/Full/",
                `${imgName}.${imgExt}`
            );
            const outpath = path.join(
                __dirname,
                "../../public/iImages/Thum/",
                imgThumName
            );

            sharp.cache(false);

            dbgManager.iDebug_Message(
                "Image_Resize_Save_FileName == " + "START"
            );

            await sharp(filepath)
                .resize(imgWidth, imgHeight, {
                    fit: sharp.fit.fill,
                    withoutEnlargement: true,
                })
                .toFile(outpath);

            dbgManager.iDebug_Message("Image_Resize_Save_FileName == " + "END");

            return imgThumName;
        } catch (error) {
            dbgManager.iDebug_Message(error);
        }
    }

    /*  */
    static Image_Get_FileName(imgName: string): string {
        try {
            return imgName.split(".").slice(0, -1).join(".").toString();
        } catch (error) {
            dbgManager.iDebug_Message(error);
            return "null";
        }
    }

    /* Image_Get_FileExt */
    static Image_Get_FileExt(imgName: string): string {
        try {
            return imgName.substr(imgName.lastIndexOf(".") + 1);
        } catch (error) {
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
    /* Image_Get_FilePath */
    static Image_Get_FilePath(filename: string): string {
        //return path.resolve(`${this.folder}/${filename}`)
        return "";
    }

    /* Image_Check_IfExist */
    static async Image_Check_IfExist(imgThumName: string): Promise<boolean> {
        try {
            // let bln_IsExist: boolean = false;

            const filepath = path.join(
                __dirname,
                "../../public/iImages/Thum/",
                imgThumName
            );

            const { promises: Fs } = require("fs");

            await Fs.access(filepath);

            return true;
        } catch (error) {
            dbgManager.iDebug_Message("Image_Check_IfExist  == " + error);
            return false;
        }
    }

    /* Image_Get_List_ImageName_ByFolderID - get the list of jpg files in the image dir */
    static async Image_Get_List_ImageName_ByFolderID(imageDir: string) {
        let fileType = ".jpg",
            files: string[] = [],
            i;

        try {
            const fsp = require("fs-promise");

            let names = await fsp.readdir(imageDir);
            /*   dbgManager.iDebug_Message("names[0]== " + names[0]); */

            return names;
        } catch (error) {
            dbgManager.iDebug_Message(error);
        }
    }
}
