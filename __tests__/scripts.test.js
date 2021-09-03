import { AgeCalculator } from "../src/scripts";

describe("AgeCalculator", () => {

  test("should correctly calculate age on Mercury", () => {
    const calculator = new AgeCalculator(1);
    expect(calculator.getAgeOnMercury()).toEqual(0.24);
  });

  test("should correctly calculate age on Venus", () => {
    const calculator = new AgeCalculator(1);
    expect(calculator.getAgeOnVenus()).toEqual(0.62);
  });

  test("should correctly calculate age on Mars", () => {
    const calculator = new AgeCalculator(1);
    expect(calculator.getAgeOnMars()).toEqual(1.88);
  });

  test("should correctly calculate age on Jupiter", () => {
    const calculator = new AgeCalculator(1);
    expect(calculator.getAgeOnJupiter()).toEqual(11.86);
  });

  test("should correctly calculate the years you have left on each planet", () => {
    const calculator = new AgeCalculator(10);
    expect(calculator.yearsLeftOnPlanets()).toEqual(new Map([["Earth", "63 years left" ], ["Mercury", "15.12 years left"], ["Venus", "39.06 years left"], ["Mars", "118.44 years left"], ["Jupiter", "747.18 years left"]]));
  });

  test("should correctly calculate the years you have lived past life expectancy on each planet", () => {
    const calculator = new AgeCalculator(100);
    expect(calculator.yearsLeftOnPlanets()).toEqual(new Map([["Earth", "27 years past"], ["Mercury", "6.4799999999999995 years past"], ["Venus", "16.74 years past"], ["Mars", "50.76 years past"], ["Jupiter", "320.21999999999997 years past"]]));
  });

  // test("should correctly calculate your next birthday", () => {
  //   const calculator = new AgeCalculator(10);
  //   expect(calculator.getBirthdays()).toEqual(new Map([["Earth", ""], ["Mercury", ""], ["Venus", ""], ["Mars", ""], ["Jupiter", ""]]));
  // });
});