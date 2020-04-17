import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { User } from "./../src/user.js"

$(document).ready(function(){
  $("#input").submit(function(event) {
    event.preventDefault();
    let age = $("input#ageInput").val();
    let lifeExp = $("input#lifeExpInput").val();
    let user = new User(age, lifeExp);
    user.mercConverter();
    user.venusConverter();
    user.marsConverter();
    user.jupiterConverter();
    user.yearsLeft();
    $("#result").text();
  });
});