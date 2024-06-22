import { sum } from "../sum";

// test function takes two arguments 1st string (discription) , second call back function (where we write code for test)
test("Sum function should calculate the sum of two numbers", () => {
  const result = sum(3, 4);

//   Assertion
  expect(result).toBe(7);
});

