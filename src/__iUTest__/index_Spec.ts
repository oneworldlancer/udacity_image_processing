import supertest from "supertest";
import app from "../index";

// #region "Params"

const request: supertest.SuperTest<supertest.Test> = supertest(app);

// #endregion

// #region "__iUTest__ app-Endpoints"

describe("__iUTest__ app-Endpoints", () => {
  it("app-Endpoint (GET('/'))", async () => {
    const response = await request.get("/");
    //console.log(response);
    expect(response.status).toBe(200);
  });

  it("app-Endpoint (GET('/api'))", async () => {
    const response = await request.get("/api");
    //console.log(response);
    expect(response.status).toBe(200);
  });
});

// #endregion

// #region "__iUTest__ img-Endpoints"

describe("__iUTest__ img-Endpoints", () => {
  it("img-Endpoint (APP.USE('/api/img/get'))", async () => {
    const response = await request.get("/");
    //console.log(response);
    expect(response.status).toBe(200);
  });

  it("img-Endpoint (APP.USE('/api/img/new'))", async () => {
    const response = await request.get("/api/img/new");
    //console.log(response);
    expect(response.status).toBe(200);
  });

  it("img-Endpoint (APP.USEe('/api/img/get/pick'))", async () => {
    const response = await request.get("/api/img/pick");
    //console.log(response);
    expect(response.status).toBe(200);
  });
});

// #endregion
