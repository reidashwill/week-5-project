import { User } from "./../src/user.js"

describe("User", () => {

  test("should verify that the age property of user is a number", () => {
    const user1 = new User(35);
    expect(typeof(user1.age)).toEqual("number");
  })

  test("should verify that mercConverter is working to convert earth years into mercury years", () => {
    const user2 = new User(35);
    expect(user2.mercConverter()).toEqual(145);
  })

  test("should verify that venusConverter is working to convert earth years into mercury years", () => {
    const user3 = new User(35);
    expect(user3.venusConverter()).toEqual(137);
  })
})

