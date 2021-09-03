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
});