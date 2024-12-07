import StringCalculator from "../models/StringCalculator.js";
import { expect } from "chai";

describe("StringCalculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  it("should return 0 for an empty string", () => {
    expect(calculator.add("")).to.equal(0);
  });

  it("should return the number itself when only one number is provided", () => {
    expect(calculator.add("1")).to.equal(1);
  });

  it("should return the sum of two numbers", () => {
    expect(calculator.add("1,2")).to.equal(3);
  });

  it("should handle an unknown amount of numbers", () => {
    expect(calculator.add("1,2,3,4,5")).to.equal(15);
  });

  it("should handle new lines as delimiters", () => {
    expect(calculator.add("1\n2,3")).to.equal(6);
  });

  it("should support custom delimiters", () => {
    expect(calculator.add("//;\n1;2")).to.equal(3);
  });

  it("should throw an error when negative numbers are provided", () => {
    expect(() => calculator.add("1,-2,3,-4")).to.throw(
      "negative numbers not allowed -2,-4"
    );
  });
});