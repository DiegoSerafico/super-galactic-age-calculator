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
    expect(calculator.yearsLeftOnPlanets()).toEqual({"Earth": 63, "Mercury": 15.12, "Venus": 39.06, "Mars": 118.44, "Jupiter": 747.18});
  });
});