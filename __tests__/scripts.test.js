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
});