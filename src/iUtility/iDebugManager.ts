export class iDebugManager {
  strMessage: string;
  constructor(folder: string) {
    this.strMessage = folder;
  }

  /* iDebug_Message */
  static iDebug_Message(strMessage: string | unknown): boolean {
    try {
      console.log("MSG:::  " + strMessage);

      if (strMessage === null) {
        return true;
      } else if (strMessage === "") {
        return true;
      } else {
        return false;
      }
    } catch (error: string | Error | unknown | null) {
      console.log(error);
      return false;
    }
  }
}

export default iDebugManager;
