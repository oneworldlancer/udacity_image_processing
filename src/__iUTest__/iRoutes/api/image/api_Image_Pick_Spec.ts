import supertest from "supertest";
import route_image_pick from "../../../../iRoutes/api/image/api_Image_Pick";

// #region "Params"

const request: supertest.SuperTest<supertest.Test> =
  supertest(route_image_pick);

// #endregion

// #region "__iUTest__ route_image_pick"

describe("__iUTest__ Image", () => {
  it("api-route_image_pick (GET('/'))", async () => {
    const response = await request.get("/");
    //console.log(response);
    expect(response.status).toBe(200);
  });
});

// #endregion
