import supertest from "supertest";
import route_image_new from "../../../../iRoutes/api/image/api_Image_New";

// #region "Params"

const request: supertest.SuperTest<supertest.Test> = supertest(route_image_new);

// #endregion

// #region "__iUTest__ route_image_new"

describe("__iUTest__ Image", () => {
  it("api-route_image_new (GET('/'))", () => {
    const response = request.get("/");
    //console.log(response);
    expect(response.ok).toBeTrue;
  });
});

// #endregion
