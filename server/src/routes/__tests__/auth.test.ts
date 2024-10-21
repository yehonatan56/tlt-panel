import request from "supertest";
import app from "../../app";
import { describe } from "node:test";

describe("auth", function () {
  it("should return 200", async () => {
    request(app)
      .post("/auth/login/")
      .send({ username: "username", password: "password" })
      .expect(200)
      .end((err, res) => {
        if (err) throw err;
      });
  });
});
