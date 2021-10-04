import { NotImplementedError } from "../extensions/index.js";

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
export default function getSumOfDigits(n) {
  function recursion(sum) {
    sum = sum
      .toString()
      .split("")
      .reduce((temp, x) => +temp + Number.parseInt(x));
    if (sum.toString().split("").length > 1) {
      return recursion(sum);
    } else {
      return sum;
    }
  }
  return recursion(n);
}
