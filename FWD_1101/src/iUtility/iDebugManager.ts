export class iDebugManager {
    constructor(err: string) { }

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
