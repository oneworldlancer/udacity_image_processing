"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var iValidatorManager_1 = require("../../iUtility/iValidatorManager");
var iDebugManager_1 = require("../../iUtility/iDebugManager");
describe("__iUTest__ iUtility-iValidatorManager", function () {
    it("validManager.Validator_isNumber::\nSHOULD return TRUE if a Number otherwise FALSE", function () {
        try {
            expect(iValidatorManager_1.iValidatorManager.Validator_isNumber(10)).toBeTrue(),
                expect(iValidatorManager_1.iValidatorManager.Validator_isNumber("10")).toBeTrue(),
                expect(iValidatorManager_1.iValidatorManager.Validator_isNumber("X")).toBeFalse();
        }
        catch (error) {
            iDebugManager_1.iDebugManager.iDebug_Message(error);
        }
    });
});
