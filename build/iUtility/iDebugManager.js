"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iDebugManager = void 0;
var iDebugManager = /** @class */ (function () {
    function iDebugManager(err) {
    }
    /* iDebug_Message */
    iDebugManager.iDebug_Message = function (strMessage) {
        try {
            console.log("MSG:::  " + strMessage);
        }
        catch (error) {
            console.log(error);
        }
    };
    return iDebugManager;
}());
exports.iDebugManager = iDebugManager;
exports.default = iDebugManager;
