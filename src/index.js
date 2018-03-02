module.exports = function getZerosCount(number, base) {

  function getSimpleMultipliers(num) {
    let i = 2;
    let index = 0;
    let tempNum = num;
    let result = [];
    let maxDivider = 0;
    while (i <= num) {
      if (tempNum % i === 0) {
        result.push({ divider: i, quantity: 1 });
        index++;
        tempNum = tempNum / i;
      }
      else {
        i++;
      }
    }
    for (let i = 1; i < result.length; i++) {
      if (result[i].divider === result[i - 1].divider) {
        result[i - 1].quantity++;
        result.splice(i, 1);
        i = i - 1;
      }
    }
    //console.log(result);
    return result;
  }

  let arr_multi = getSimpleMultipliers(base);

  let maxDivider = arr_multi[arr_multi.length - 1].divider;
  let maxDividerQuant = arr_multi[arr_multi.length - 1].quantity;

  let zeroes = 0;

  for (let i = 1; i <= number; i++) {
    let temp_i = i;
    while (temp_i % maxDivider === 0) {
      temp_i = temp_i / maxDivider;
      zeroes++
    }
    if (i % maxDivider === 0) {
      i = i + maxDivider - 1;
    }
  }

  zeroes = Math.floor(zeroes / maxDividerQuant);

  return zeroes;
}