export class User {
  constructor(age, lifeExp) {
    this.age = age;
    this.lifeExp = lifeExp;
  }

  mercConverter() {
    this.mercYears = Math.floor((this.age / .24));
    return this.mercYears;
  }
  mercLifeConverter() {
    this.mercLifeExp = Math.floor((this.lifeExp / .24));
    return this.mercLifeExp;
  }
  venusConverter() {
    this.venusYears = Math.floor((this.age / .62));
    return this.venusYears;
  }
  marsConverter() {
    this.marsYears = Math.floor((this.age / 1.88));
    return this.marsYears;
  }
  jupiterConverter() {
    this.jupiterYears = Math.floor((this.age / 11.86));
    return this.jupiterYears;
  }
}