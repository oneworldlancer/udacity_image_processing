import { iValidatorManager as validManager } from "../../iUtility/iValidatorManager";
import { iDebugManager as dbgManager } from "../../iUtility/iDebugManager";
describe("__iUTest__ iUtility-iValidatorManager", () => {
  it("validManager.Validator_isNumber::\nSHOULD return TRUE if a Number otherwise FALSE", () => {
    try {
      expect(validManager.Validator_isNumber(10)).toBeTrue(),
        expect(validManager.Validator_isNumber("10")).toBeTrue(),
        expect(validManager.Validator_isNumber("X")).toBeFalse();
    } catch (error) {
      dbgManager.iDebug_Message(error);
    }
  });
});
