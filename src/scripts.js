export class AgeCalculator {
  constructor(age) {
    this.age = age;
    this.planetConversionRates = new Map([["Earth", 1], ["Mercury", 0.24], ["Venus", 0.62], ["Mars", 1.88], ["Jupiter", 11.86]]);
  }


  getAgeOnMercury() {
    return parseFloat((this.age * 0.24).toFixed(2));
  }

  getAgeOnVenus() {
    return parseFloat((this.age * 0.62).toFixed(2));
  }

  getAgeOnMars() {
    return parseFloat((this.age * 1.88).toFixed(2));
  }

  getAgeOnJupiter() {
    return parseFloat((this.age * 11.86).toFixed(2));
  }

  yearsLeftOnPlanets() {
    let lifeExpectancy = 73;
    let result = new Map();
    let earthAge = this.age;
    this.planetConversionRates.forEach(function(value, key) {
      let yearsLeft = (lifeExpectancy - earthAge) * value;
      result.set(key, Math.abs(yearsLeft.toFixed(1)) + (yearsLeft > 0 ? " years left" : " years past"));
    });
    return result;
  }
}