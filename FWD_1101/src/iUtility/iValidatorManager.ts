import { iDebugManager as dbgManager } from "../iUtility/iDebugManager";

export class iValidatorManager {
    constructor(err: string | number | unknown) {}

    /* Validator_isNumber */
    static Validator_isNumber(value: string | number): boolean {
        try {
            return (
                value != null &&
                value !== "" &&
                !isNaN(Number(value.toString()))
            );
        } catch (error) {
            dbgManager.iDebug_Message(error);
            return false;
        }
    }
}

export default iValidatorManager;
