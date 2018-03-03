module.exports = function getZerosCount(number, base) {

  function getSimpleMultipliers(num) {
    let i = 2;
    let index = 0;
    let tempNum = num;
    let result = [];
    let maxDivider = 0;
    while (i <= num) {
      if (tempNum % i === 0) {
        result.push({ divider: i, quantity: 1, count: 0 });
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
    return result;
  }

  let arr_multi = getSimpleMultipliers(base);

  let maxDivider = arr_multi[arr_multi.length - 1].divider;
  let maxDividerQuant = arr_multi[arr_multi.length - 1].quantity;

  // for exeption when we need orient to lower divider chk this exeption MB this is not good on low numbers. Need tests this on low numbers
  // ##########
  for (let i = 2; i <= 100; i++) {
    let not_next = true;
    let temp_i = i;
    let index = 0;
    while (index < arr_multi.length) {
      let element = arr_multi[index];
      while (temp_i % element.divider === 0) {
        element.count++
        temp_i = temp_i / element.divider;
      }
      index++;
    }
  }

  for (let i = 1; i < arr_multi.length; i++) {
    if (arr_multi[i].count / arr_multi[i].quantity > arr_multi[i - 1].count / arr_multi[i - 1].quantity) {
      maxDivider = arr_multi[i - 1].divider;
      maxDividerQuant = arr_multi[i - 1].quantity;
    }
  }
  // ##########

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