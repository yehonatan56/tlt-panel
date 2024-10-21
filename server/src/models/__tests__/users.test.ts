import { describe } from "node:test";
import usersModel from "../users.model";

describe("bcrypt", function () {
  it("hash", async () => {
    const user = new usersModel({
      username: "username",
      password: "password",
      role: "user",
    });
    const res = await user.save();
    expect(res.password).not.toBe("password");
  });
});
