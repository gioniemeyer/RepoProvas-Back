import supertest from "supertest";

import app, { init } from "../../src/app";
import { getConnection } from "typeorm";

afterAll(async () => {
  await getConnection().close();
});

beforeAll(async () => {
  await init();
});

const bodyCourse = { id: 1 };

describe("POST /filter-subjects", () => {
  it("should answer with text an object containing courses and status 200", async () => {
    const response = await supertest(app).post("/filter-subjects").send(bodyCourse);
    expect(response.body).toEqual(expect.arrayContaining([{
      coursesId: expect.any(Number),
      subjects: {
        id: expect.any(Number),
        Name: expect.any(String),
        semester: expect.any(Number)
      }
    }]));
    expect(response.status).toBe(200);
  });

  it("should answer with status 401 for courseId inexistent", async () => {
    const response = await supertest(app).post("/filter-subjects").send({id: 0});
    expect(response.status).toBe(401);
  });

});
