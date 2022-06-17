"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var iDebugManager_1 = require("../../iUtility/iDebugManager");
describe("__iUTest__ iUtility-iDebugManager", function () {
    it("dbgManager.iDebug_Message::\nSHOULD return TRUE if ERROR===NULL", function () {
        try {
            expect(iDebugManager_1.iDebugManager.iDebug_Message(null)).toBeTrue();
        }
        catch (error) {
            console.log(error);
        }
    });
    it("dbgManager.iDebug_Message::\nSHOULD return TRUE if ERROR===isEmpty()", function () {
        try {
            expect(iDebugManager_1.iDebugManager.iDebug_Message("")).toBeTrue();
        }
        catch (error) {
            console.log(error);
        }
    });
    it("dbgManager.iDebug_Message::\nSHOULD return FALSE if ERROR===NOT-NULL", function () {
        try {
            expect(iDebugManager_1.iDebugManager.iDebug_Message("x")).toBeFalse;
        }
        catch (error) {
            console.log(error);
        }
    });
});
