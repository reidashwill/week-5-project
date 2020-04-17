export class User {
  constructor(age) {
    this.age = age;
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
}