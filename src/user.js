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
    $("#long-life").html("")
    $("#result-header").html("Here's a breakdown of how old you are on some faraway planets!")
    $("#merc").html("Mercury: " + this.mercYears);
    $("#venus").html("Venus: " + this.venusYears);
    $("#mars").html("Mars: " + this.marsYears);
    $("#jupiter").html("Jupiter " + this.jupiterYears);
    if(this.age > this.lifeExp){
    $("#long-life").html("WHOA!  Good job! You have lived past your life expectancy! On Mercury you have outlived your expectancy by " + Math.abs(this.mercYearsLeft) + " years!  On venus, so far you've made it an extra " + Math.abs(this.venusYearsLeft) + " years! And on mars and jupiter respectively, you've lasted " + Math.abs(this.marsYearsLeft) + " and " + Math.abs(this.jupiterYearsLeft) + " years!" );
    }
    
  }
}