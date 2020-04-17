import $ from "jquery";

export class User {
  constructor(age, lifeExp) {
    this.age = age;
    this.lifeExp = lifeExp;
  }

  mercConverter() {
    this.mercYears = Math.floor((this.age / .24));
    this.mercLifeExp = Math.floor((this.lifeExp / .24));
    console.log(this.mercLifeExp)
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
    console.log(this)
  }

  displayResults() {
    // $("#result").html("");
    $("#merc").append(" " + this.mercYears);
    $("#venus").append(" " + this.venusYears);
    $("#mars").append(" " + this.marsYears);
    $("#jupiter").append(" " + this.jupiterYears);
    if(this.age > this.lifeExp){
    $("#results-field").append("WHOA!  Good job! You have lived past your life expectancy! On Mercury you have outlived your expectancy by " + Math.abs(this.mercYearsLeft) + " years!  On venus, so far you've made it an extra " + Math.abs(this.venusYearsLeft) + " years! And on mars and juputer respectively, you've lasted " + Math.abs(this.marsYearsLeft) + " and " + Math.abs(this.jupiterYearsLeft) + " years!" );
    
    }
  }
}