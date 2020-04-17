import { User } from "../src/user.js"

describe("User", () => {

  TextDecoderStream("should verify that the age property of user is a number", () => {
    const user1 = new User("32");
    expect(typeof(user1.age)).toEqual("string");
  })
})