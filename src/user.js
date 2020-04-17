export class User {
  constructor(age, lifeExp) {
    this.age = age;
    this.lifeExp = lifeExp;
  }

  mercConverter() {
    this.mercYears = Math.floor((this.age / .24));
    return this.mercYears
  }
  mercLifeConverter() {
    this.mercLifeExp = Math.floor((this.lifeExp / .24));
    return this.mercLifeExp;
  }
  venusConverter() {
    this.venusYears = Math.floor((this.age / .62));
    return this.venusYears;
  }
   venusLifeConverter() {
    this.venusLifeExp = Math.floor((this.lifeExp / .62));
    return this.venusLifeExp;
  }
  marsConverter() {
    this.marsYears = Math.floor((this.age / 1.88));
    return this.marsYears;
  }
  marsLifeConverter() {
    this.marsLifeExp = Math.floor((this.lifeExp / 1.88));
    return this.marsLifeExp;
  }
  jupiterConverter() {
    this.jupiterYears = Math.floor((this.age / 11.86));
    return this.jupiterYears;
  }
  jupiterLifeConverter() {
    this.jupiterLifeExp = Math.floor((this.lifeExp / 11.86));
    return this.jupiterLifeExp;
  }
  yearsLeft() {
    this.mercYearsLeft = (this.mercLifeExp - this.mercYears)
    this.venusYearsLeft = (this.venusLifeExp - this.venusYears)
    this.marsYearsLeft = (this.marsLifeExp - this.marsYears)
    this.jupiterYearsLeft = (this.jupiterLifeExp - this.jupiterYears)
  }
}