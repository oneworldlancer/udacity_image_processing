"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var supertest_1 = __importDefault(require("supertest"));
var api_Image_New_1 = __importDefault(require("../../../../iRoutes/api/image/api_Image_New"));
// #region "Params"
var request = (0, supertest_1.default)(api_Image_New_1.default);
// #endregion
// #region "__iUTest__ route_image_new"
describe("__iUTest__ Image", function () {
    it("api-route_image_new (GET('/'))", function () {
        var response = request.get("/");
        //console.log(response);
        expect(response.ok).toBeTrue;
    });
});
// #endregion
