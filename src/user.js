export class User {
  constructor(age, lifeExp) {
    this.age = age;
    this.lifeExp = lifeExp;
  }

  mercConverter() {
    this.mercYears = Math.floor((this.age / .24));
    this.mercLifeExp = Math.floor((this.lifeExp / .24));
  }

  venusConverter() {
    this.venusYears = Math.floor((this.age / .62));
    this.venusLifeExp = Math.floor((this.lifeExp / .62));
  }

  marsConverter() {
    this.marsYears = Math.floor((this.age / 1.88));
    this.marsLifeExp = Math.floor((this.lifeExp / 1.88));
  }

  jupiterConverter() {
    this.jupiterYears = Math.floor((this.age / 11.86));
    this.jupiterLifeExp = Math.floor((this.lifeExp / 11.86));
  }
  

  yearsLeft() {
    this.mercYearsLeft = (this.mercLifeExp - this.mercYears);
    this.venusYearsLeft = (this.venusLifeExp - this.venusYears);
    this.marsYearsLeft = (this.marsLifeExp - this.marsYears);
    this.jupiterYearsLeft = (this.jupiterLifeExp - this.jupiterYears);
  }

  displayResult() {
    $("#result").html("");
    console.log("test");
    // if(this.mercLifeExp < 0){
    //   $("#result").append("WHOA!  Good job! You have lived past your life expectancy on Mercury by" + Math.abs(this.mercLifeExp));
    //   console.log("test");
    // }  
  }
}