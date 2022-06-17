export class iDebugManager {
  strMessage: string;
  constructor(folder: string) {
    this.strMessage = folder;
  }

  /* iDebug_Message */
  static iDebug_Message(strMessage: string | unknown) {
    try {
      console.log("MSG:::  " + strMessage);
    } catch (error) {
      console.log(error);
    }
  }
}

export default iDebugManager;
