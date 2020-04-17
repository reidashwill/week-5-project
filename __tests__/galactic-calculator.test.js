import { User } from "./../src/user.js"

describe("User", () => {

  test("should verify that User constructor is a creating age and life expectancy properties", () => {
    const user1 = new User(35, 85);
    expect(typeof(user1.age)).toEqual("number");
    expect(typeof(user1.lifeExp)).toEqual("number");
  })

  test("should verify that mercConverter is working to convert earth years into mercury years", () => {
    const user2 = new User(35, 85);
    expect(user2.mercConverter()).toEqual(145);
  })

  test("should verify that venusConverter is working to convert earth years into mercury years", () => {
    const user3 = new User(35, 85);
    expect(user3.venusConverter()).toEqual(56);
  })

  test("should verify that marsConverter is working to convert earth years into mercury years", () => {
    const user4 = new User(35, 85);
    expect(user4.marsConverter()).toEqual(18);
  })

  test("should verify that jupiterConverter is working to convert earth years into mercury years", () => {
    const user5 = new User(35, 85);
    expect(user5.jupiterConverter()).toEqual(2);
  })

  test("should verify the life expectancy on mercury", () => {
    const user6 = new User (35, 85);
    expect(user6.mercLifeConverter()).toEqual(354)
  })

})

