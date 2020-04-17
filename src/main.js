import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { User } from "./../src/user.js";


$(document).ready(function(){
  $("#formGroup").submit(function(event) {
    event.preventDefault();
    let ageInput = $("input#ageInput").val();
    let lifeExpInput = $("input#lifeExpInput").val();
    const user = new User(parseInt(ageInput), parseInt(lifeExpInput));
    user.mercConverter();
    user.venusConverter();
    user.marsConverter();
    user.jupiterConverter();
    user.yearsLeft();
    user.displayResults();
    document.getElementById("formGroup").reset();
    
  });
});  
