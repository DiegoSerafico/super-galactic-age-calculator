export default class AgeCalculator {
  constructor(age) {
    this.age = age;
    this.planetConversionRates = new Map([["Earth", 1], ["Mercury", 0.24], ["Venus", 0.62], ["Mars", 1.88], ["Jupiter", 11.86]]);
  }


  getAgeOnMercury() {
    return this.age * 0.24;
  }

  getAgeOnVenus() {
    return this.age * 0.62;
  }

  getAgeOnMars() {
    return this.age * 1.88;
  }

  getAgeOnJupiter() {
    return this.age * 11.86;
  }

  yearsLeftOnPlanets() {
    let lifeExpectancy = 73;
    let result = new Map();
    let earthAge = this.age;
    this.planetConversionRates.forEach(function(value, key) {
      let yearsLeft = (lifeExpectancy - earthAge) * value;
      result.set(key, Math.abs(yearsLeft) + (yearsLeft > 0 ? " years left" : " years past"));
    });
    return result;
  }
}