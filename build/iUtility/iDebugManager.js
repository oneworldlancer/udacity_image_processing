"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iDebugManager = void 0;
var iDebugManager = /** @class */ (function () {
    function iDebugManager(folder) {
        this.strMessage = folder;
    }
    /* iDebug_Message */
    iDebugManager.iDebug_Message = function (strMessage) {
        try {
            console.log("MSG:::  " + strMessage);
            if (strMessage === null) {
                return true;
            }
            else if (strMessage === "") {
                return true;
            }
            else {
                return false;
            }
        }
        catch (error) {
            console.log(error);
            return false;
        }
    };
    return iDebugManager;
}());
exports.iDebugManager = iDebugManager;
exports.default = iDebugManager;
