import supertest from "supertest";

import app, { init } from "../../src/app";
import { getConnection } from "typeorm";

afterAll(async () => {
  await getConnection().close();
});

beforeAll(async () => {
  await init();
});

describe("GET /filter-courses", () => {
  it("should answer with text an object containing courses and status 200", async () => {
    const response = await supertest(app).get("/filter-courses");
    expect(response.body).toEqual(expect.arrayContaining([{
      id: expect.any(Number),
      Name: expect.any(String)
    }]));
    expect(response.status).toBe(200);
  });
});
