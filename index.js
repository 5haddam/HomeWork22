function power(number, degree) {
  let resultOfPowerUp = 1;
  function powersUp(number, degree) {
    if (degree > 0) {
      resultOfPowerUp *= number;
      return powersUp(number, degree - 1);
    }
    return resultOfPowerUp;
  }
  return powersUp(number, degree);
}

console.log(power(7, 2));
console.log(power(5, 3));
