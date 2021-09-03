import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import { AgeCalculator } from './scripts.js';

function mapToString(map) {
  let result = "";
  let isFirstTime = true;
  map.forEach(function(value, key) {
    if (isFirstTime) {
      result += " " + key + " = " + value;
      isFirstTime = false;
    }
    result += ", " + key + " = " + value;
  });
  result += ".";
  return result;
}

$(function() {
  $("#age-calculator-form").submit(function(event) {
    event.preventDefault();
    $("#output").hide();
    const age = $("#ageInput").val();
    const calculator = new AgeCalculator(age);
    $("#ageInMercury").text(calculator.getAgeOnMercury());
    $("#ageInVenus").text(calculator.getAgeOnVenus());
    $("#ageInMars").text(calculator.getAgeOnMars());
    $("#ageInJupiter").text(calculator.getAgeOnJupiter());
    $("#yearsLeft").text(mapToString(calculator.yearsLeftOnPlanets()));
    $("#output").fadeIn(1200);
  });
});