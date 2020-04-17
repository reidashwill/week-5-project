export class User {
  constructor(age) {
    this.age = age;
    this.mercYears = null
  }

  mercConverter() {
    this.mercYears = Math.floor((this.age / .24));
    return this.mercYears;
  }
}