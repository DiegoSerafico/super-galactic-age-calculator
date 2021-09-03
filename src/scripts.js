export class AgeCalculator {
  constructor(age) {
    this.age = age;
  }

  getAgeOnMercury() {
    return this.age * 0.24;
  }

  getAgeOnVenus() {
    return this.age * 0.62;
  }
}