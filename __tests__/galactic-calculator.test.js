import { User } from "./../src/user.js"

describe("User", () => {

  test("should verify that the age property of user is a number", () => {
    const user1 = new User(35);
    expect(typeof(user1.age)).toEqual("number");
  })
}) 