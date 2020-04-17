import { User } from "./../src/user.js"

describe("User", () => {

  test("should verify that the age property of user is a number", () => {
    const user1 = new User(35);
    expect(typeof(user1.age)).toEqual("number");
  })

  test("should verify that converter is working to convert earth years into mercury years", () => {
    const user2 = new User(35);
    expect(user2.converter()).toEqual(145);
  })
})

