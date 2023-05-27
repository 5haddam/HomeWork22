function initializePowersUpFunction() {
  let resultOfPowerUp = 1;
  function powersUp(number, degree) {
    if (degree > 0) {
      resultOfPowerUp *= number;
      return powersUp(number, degree - 1);
    }
    return resultOfPowerUp;
  }
  return powersUp;
}

const power = initializePowersUpFunction();

console.log(power(10, 5));