module.exports = function getZerosCount(number, base) {

  //console.log("number= " + number);

  function getSimpleMultipliers(num) {
    let i = 2;
    let index = 0;
    let tempNum = num;
    let result = [];
    while (i <= num) {
      if (tempNum % i === 0) {
        result.push({ divider: i, summ: 0 });
        index++;
        tempNum = tempNum / i;
      }
      else {
        i++;
      }
    }
    //console.log(result);
    return result;
  }

  let arr_multi = getSimpleMultipliers(base);

  let maxDivider = arr_multi[arr_multi.length - 1].divider;
  //console.log("maxDivider= " + maxDivider);

  let zeroes = 0;

  for (let i = 1; i <= number; i++) {
    let temp_i = i;
    while (temp_i % maxDivider === 0) {
      temp_i = Math.abs(temp_i / maxDivider);
      zeroes++
    }
  }

  let count_of_repeating_max_divider = 0;
  arr_multi.forEach(function (element) {
    if (maxDivider === element.divider) {
      count_of_repeating_max_divider++;
    };
  })

  zeroes = Math.floor(zeroes / count_of_repeating_max_divider);

  return zeroes;
}