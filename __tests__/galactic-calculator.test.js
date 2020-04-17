import { User } from "./../src/user.js"

describe("User", () => {

  test("should verify that User constructor is a creating age and life expectancy properties", () => {
    const user1 = new User(35, 85);
    expect(typeof(user1.age)).toEqual("number");
    expect(typeof(user1.lifeExp)).toEqual("number");
  })

  test("should verify that mercConverter is working to convert earth years into mercury years for age and life expectancy", () => {
    const user2 = new User(35, 85);
    user2.mercConverter()
    expect(user2.mercYears).toEqual(145);
    expect(user2.mercLifeExp).toEqual(354)
  })

  test("should verify that venusConverter is working to convert earth years into venus years for age and life expectancy", () => {
    const user3 = new User(35, 85);
    user3.venusConverter()
    expect(user3.venusYears).toEqual(56);
    expect(user3.venusLifeExp).toEqual(137)
  })

  test("should verify that marsConverter is working to convert earth years into mercury years for age and life expectancy", () => {
    const user4 = new User(35, 85);
    user4.marsConverter()
    expect(user4.marsYears).toEqual(18);
    expect(user4.marsLifeExp).toEqual(45)
  })

  test("should verify that jupiterConverter is working to convert earth years into mercury years for age and life expectancy", () => {
    const user5 = new User(35, 85);
    user5.jupiterConverter()
    expect(user5.jupiterYears).toEqual(2);
    expect(user5.jupiterLifeExp).toEqual(7)
  })

  
  
  test("should verify how many years the user has remaining on each planet", () => {
    const user6 = new User (35, 85);
    user6.mercConverter();
    user6.venusConverter();
    user6.marsConverter();
    user6.jupiterConverter();
    user6.yearsLeft();
    
    expect(user6.mercYearsLeft).toEqual(209)
    expect(user6.venusYearsLeft).toEqual(81)
    expect(user6.marsYearsLeft).toEqual(27)
    expect(user6.jupiterYearsLeft).toEqual(5)    
  })

})

