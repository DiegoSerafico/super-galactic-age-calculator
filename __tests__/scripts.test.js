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
    expect(calculator.yearsLeftOnPlanets()).toEqual(new Map([["Earth", "63 years left" ], ["Mercury", "15.1 years left"], ["Venus", "39.1 years left"], ["Mars", "118.4 years left"], ["Jupiter", "747.2 years left"]]));
  });

  test("should correctly calculate the years you have lived past life expectancy on each planet", () => {
    const calculator = new AgeCalculator(100);
    expect(calculator.yearsLeftOnPlanets()).toEqual(new Map([["Earth", "27 years past"], ["Mercury", "6.5 years past"], ["Venus", "16.7 years past"], ["Mars", "50.8 years past"], ["Jupiter", "320.2 years past"]]));
  });

  // test("should correctly calculate your next birthday", () => {
  //   const calculator = new AgeCalculator(10);
  //   expect(calculator.getBirthdays()).toEqual(new Map([["Earth", ""], ["Mercury", ""], ["Venus", ""], ["Mars", ""], ["Jupiter", ""]]));
  // });
});