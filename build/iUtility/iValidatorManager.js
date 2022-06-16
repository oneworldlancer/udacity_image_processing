"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iValidatorManager = void 0;
var iDebugManager_1 = require("../iUtility/iDebugManager");
var iValidatorManager = /** @class */ (function () {
    function iValidatorManager(err) {
    }
    /* Validator_isNumber */
    iValidatorManager.Validator_isNumber = function (value) {
        try {
            return (value != null &&
                value !== "" &&
                !isNaN(Number(value.toString())));
        }
        catch (error) {
            iDebugManager_1.iDebugManager.iDebug_Message(error);
            return false;
        }
    };
    return iValidatorManager;
}());
exports.iValidatorManager = iValidatorManager;
exports.default = iValidatorManager;
