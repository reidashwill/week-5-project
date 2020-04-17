export class User {
  constructor(age, lifeExp) {
    this.age = age;
    this.lifeExp = lifeExp;
  }

  mercConverter() {
    this.mercYears = Math.floor((this.age / .24));
    return this.mercYears;
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