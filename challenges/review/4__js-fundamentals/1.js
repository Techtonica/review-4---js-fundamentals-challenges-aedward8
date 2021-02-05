// Write a function below that accepts a number as the only argument.
// The function should determine whether the number is divisible by 3,
// and return either true or false.
// Choose names that make the code easy to understand.
//
// Note:  None of the review # problems have tests included, but feel free to write your own.

function divideByThree(num1){
  if (num1 % 3 === 0){
  return true;
  } else {
    return false;
  }
}

console.log(divideByThree(6)) // true
console.log(divideByThree(7)) //false
